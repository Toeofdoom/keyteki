{
  function flattenArrays(array) {
    let items = []
    for(let item of array)
    	if(!Array.isArray(item))
        	items.push(item)
        else
        	items = items.concat(flattenArrays(item))
    return items
  }
}

//Structure
Lines = line:Line tail:(NewLine l:Line {return l;})* NewLine? {
	return flattenArrays([line, ...tail])
}

Line = ability:(Keywords / BoldAbility / PersistentEffect / GeneralTrigger / ReminderText / _ )
	_ unknown:(_ e:UnknownFragment [.;]? _ {return e;})* 
{
	if(unknown.length > 0)
    	return [ability, ...unknown]
    return ability
}

NewLine = [\n\r\u000b]+ {
	return { name: "newline"}
}

//Supported ability formats. 
//Keywords
Keywords = word:Keyword tail:(". " w:Keyword {return w;})* [.;]? _ ReminderText? {
	return {
		name: "keywords", 
		keywords: [word, ...tail]
	}
}

Keyword = name:("Elusive"i / "Skirmish"i / "Taunt"i / "Poison"i / "Deploy"i / "Alpha"i 
/ "Omega"i / "Assault"i / "Hazardous"i / "Invulnerable"i / e:"Enhance"i _ [A-Z]i+ {return e;})
_ count:Integer? {
	return {name: name.toLowerCase(), count};
}

//"Bold" effects (Play, fight, reap, destroyed etc.)
BoldAbility = trigger:BoldTrigger extraTriggers:("/" t:BoldTrigger {return t;})* ": " effect:TriggeredEffect {
	return {
		name: 'bold', 
		trigger, //TODO: Single triggers list.
		extraTriggers,
		effect
	}
}

BoldTrigger = ("Play" / "Reap" / "Before Fight" / "Fight" / "Destroyed" / "Action" / "Omni") {
	if (text() == "Before Fight") return "beforeFight";
	return text().toLowerCase();
}

//Persistent effects. If conditions are required for things like bonesaw
PersistentEffect = condition:(WhileCondition/IfCondition)? _ 
pe:(PersistentPlayerEffect/PersistentCardEffect)
_ multiplier:Multiplier? [.;]? _ ReminderText? {
    return Object.assign({name: 'persistentEffect', multiplier, condition}, pe)
}

PersistentPlayerEffect = target:PlayerTarget? _ effect:SinglePersistentPlayerEffect {
	return {
		target, 
		effects: [effect]
	}
} / SpecialPersistentPlayerEffect //For effects with more unique formats.

PersistentCardEffect = target:GeneralCardTarget? _ effects:PersistentCardEffectList [.;]? {
	return  {
		target, 
		effects: flattenArrays(effects).filter(x => x !== null)
	}
}

PersistentCardEffectList = item:SinglePersistentCardEffect _ items:(_ And _ e:SinglePersistentCardEffect {return e;})* {
	return [item, ...items]
}

//General triggers
GeneralTrigger = SpontaneousTrigger/GeneralPersistentTrigger/GeneralDurationTrigger/PhaseTrigger

//Spontaneous means that ss soon as a condition is met, a certain effect will occur
SpontaneousTrigger = IfCondition _ TriggeredEffect

//Persistent effects typically list the trigger, then the effect. Duration effects typically reverse that.
GeneralPersistentTrigger = ("Each time"i/"After"i) _ trigger:Trigger "," _ effect:TriggeredEffect [.;]? {
	return {name: "reaction", trigger, effect}
}
GeneralDurationTrigger = effect:SingleEffect _ "each time"i _ trigger:Trigger {
	return {name: "reaction", trigger, effect}
}

//Phase or turn based triggers use different wording
PhaseTrigger = "At the"i _ part:("start"/"end") _ "of" _ player:PlayerTarget _ 
	trigger:("turn"{return null}/"“ready cards” step" {return "onCardsReadied"}) "," 
	effect:TriggeredEffect [.;]? {
	return {
		name: "reaction", 
		trigger: {
			name: trigger || (part == "start" ? "onRoundStarted" : "onRoundEnded"),
			player,
		},
		effect
	}
}

//All the actual triggers
Trigger = PlayerFocusedTrigger / CardFocusedTrigger / PlayerAndCardFocusedTrigger

PlayerFocusedTrigger = eventPlayer:PlayerTarget _ trigger:PlayerTriggerType {
	return {trigger, eventPlayer};
}

CardFocusedTrigger = card:GeneralCardTarget _ trigger:CardTriggerType _ condition:"during your turn"? {
	return {trigger, card, condition}
}

PlayerAndCardFocusedTrigger = eventPlayer:PlayerTarget _ trigger:PlayerCardTriggerType _ 
	card:GeneralCardTarget {
	return {trigger, card, eventPlayer};
}

PlayerTriggerType = "forge" "s"? _ "a key" {return "forges"}

PlayerCardTriggerType = t:("play"i/"use"i/"fight with"i/"reap with"i) "s"? {return t}

CardTriggerType = "is destroyed fighting $this" {return "destroyedFightingThis"}
	/"is destroyed" {return "destroyed"}
	/"reaps" {return "reap"}
	/"is used" {return "used"}
	/("fights"/"is used to fight") {return "fight"}
	/"enters play" {return "entersPlay"}
	/"is discarded from" _ playerTarget:PlayerTarget _ "hand" {return "discardedACard"}

//Reminder text
ReminderText = _ "(" [^)]+ ")" _ {
	return {name: "reminderText", keywords: [text()]}
}

//Unrecognised text
UnknownEffect = [$A-Z]i([^\n\r\u000b.;“] / QuotedSection)* {
	return {name: 'unknown', text: text()}
}

UnknownFragment = _ ([^\n\r\u000b.;“] / QuotedSection)+ {
	return {name: 'unknown', text: text()}
}

//Triggered effects / actions
TriggeredEffect = effect:(SingleEffect) ReminderText? ([.;]/_"and")? ReminderText? _ 
tail:(u:SingleSubsequentEffect [.;]? _ ReminderText? {return u;} )* {
	return [effect,...tail]
}

SingleEffect = condition:IfCondition? _ optional:"You may"i? _ effect:(
MoveCardEffect / PlayerEffect / CaptureAmber / CardEffect / GiveEffect / MoveAmberEffect 
/ TimeLimitedEffect / ChooseTargetEffect / UnknownEffect) 
condition2:IfCondition? {
	let extras = {
    	optional: optional != null,
        condition: condition || condition2
    }
    return Object.assign(effect, extras)
}

ChooseTargetEffect = ("Choose a house"i/"Choose"i _ CardTarget)

SingleSubsequentEffect = then:ThenCondition? _ effect:SingleEffect _ replacement:"instead"? {
    return Object.assign(effect, then, {replacement:replacement != null})
}

ThenCondition = condition:(
	"If you do," {return null}/
    "Otherwise,"i {return {name:"otherwise"}}/
    "If this damage destroys that creature,"i {return {name:"destroysTarget"};}/
    "If it is not destroyed,"i {return {name:"not", condition:{name:"destroysTarget"}};}) {
    return {
    	then: true,
        condition
    }
}

TimeLimitedEffect = (duration:Duration "," _ effect:(PersistentEffect/GeneralTrigger) {
	return {name:duration, durationEffect:effect}
}/effect:PersistentEffect _ duration:Duration {
	return {name:duration, durationEffect:effect}
})

Duration = "For the remainder of the turn"i {return "forRemainderOfTurn"} /
"during your opponent’s next turn"i {return "lastingEffect"}


//Persistent effects
//Persistent player effects
SinglePersistentPlayerEffect = KeyCost/CantBeStolen
SpecialPersistentPlayerEffect = ModifyHandSize

//Persistent card effects, including upgrades
SinglePersistentCardEffect = GetsStats/GainsAbility/EntersPlayAbility/MayBeUsed/CannotEffect/LimitFightDamage

//TODO: Figure out neatest way of dealing with arrays here.
GetsStats = "gets" _ statChanges:StatChangeList _ multiplier:Multiplier? {
	return statChanges.map((s) => Object.assign(s, {multiplier}));
}
StatChangeList = item:StatChange items:(_ And _ e:StatChange {return e;})* {
	return [item, ...items]
}
StatChange = amount:Number _ stat:("power"i/"armor"i){
	return {name: "modify"+ stat.charAt(0).toUpperCase() + stat.slice(1), amount};
}

//"Gains"
GainsAbility = "gains"i ","? _ ability:GainAbilityList {
	return ability
}

GainSingleAbility = keywords:Keywords _{return Object.assign(keywords, {name: "gainKeywords"});} 
/ Quote ability:BoldAbility Quote {return {name: "gainAbility", ability};}

GainAbilityList = items:(e:GainSingleAbility _ And _ {return e;})* _ item:GainSingleAbility {
	return [...items, item]
}

//Enters play
EntersPlayAbility = "enter" "s"? " play" _ states:CardStateList {
	return states.map((state) => ({name: 'entersPlay' + state.charAt(0).toUpperCase() + state.slice(1)}))
}

//TODO: Combine with conditions?
CardState = ("stunned"i/"ready"i/"enraged"i/"exhausted"i)
CardStateList = items:(i:CardState _ And _ {return i;})* _ item:CardState {
	return [...items, item]
}

CannotEffect = "cannot" _ effect:("reap"/"fight"/"be used"/"be dealt damage") {return [{name:"cannot",effect}];}
LimitFightDamage = "only deals" _ amount:Number "D when fighting" {return [{name:"limitFightDamage",amount}];}

KeyCost = "keys cost "i amount:Number ("<A>"/"A") {	return {name: "modifyKeyCost", amount};}
CantBeStolen = "A cannot be stolen" {return {name:"cantBeStolen"};}

ModifyHandSize = "During" _ ("your"/"their") _ Quote "draw cards" Quote _ "step,"
_ target:("refill your"{return "self"}/t:PlayerTarget _ "refills their" {return t;}) 
_ "hand to" _ amount:Number  _ "card" "s"? _ multiplier:Multiplier? {
	return {
    	target: {controller:target || "any"}, 
        effects:[{name: "modifyHandSize", amount, multiplier}]
    };
}

//Player effect section - for abilities that target a single player
PlayerEffect = target:PlayerTarget? _ effect:(
Forge/ GainAmber / LoseAmber / StealAmber / GainChains / DrawCards / DiscardCards ) {
	let info = {};
	if (target) info.targetPlayer = target;
	return Object.assign(effect, info);
}

PlayerTarget = ("Your Opponent"i (['’]?"s"?) {return "opponent"}
/ "You"i "r"? {return "self"}
/ ("their owners’"i/"each player’s"i/"Each player"i) {return "any";}
/"its owner" (['’]?"s"?) {return "owner"}
/"its controller" "’s"? {return "controller"}
/"its opponent" {return "controllerOpponent"})
/"they"

//NumericalPlayerEffect...
GainAmber = "Gain"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'gainAmber', amount: amount, multiplier: multiplier}
}

StealAmber = "Steal"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'steal', amount: amount, multiplier: multiplier}
}

CaptureAmber = "Capture"i "s"? _ howMuch:AmberCount {
	return Object.assign({name: 'capture'}, howMuch);
}

LoseAmber = "Lose"i "s"? _ howMuch:AmberCount {
	return Object.assign({name: 'loseAmber'}, howMuch);
}

AmberCount = amount:Number ("<A>"/"A") _ multiplier:Multiplier? { return {amount, multiplier}}
/("all of it"/"all of" _ PlayerTarget _ ("<A>"/"A")) {return {amount: "all"};}

Forge = "forge a key at current cost"i {
	return {name: 'forgeAKey'}
}

DrawCards = "Draw"i "s"? _ amount:Number _ ("cards"/"card") _ multiplier:Multiplier? {
	return {name: 'draw', amount: amount, multiplier: multiplier}
}

DiscardCards = "Discard"i "s"? _ amount:Number _ "random"i _ ("cards"/"card") _ "from" _ ("your"i/"their"i) _ location:("hand") {
	return {
		name: 'discardAtRandom', 
		amount: amount, 
		targetPlayer: 'self', 
		location: location
	}
}

GainChains = "Gain"i "s"? _ amount:Number _ ("chains"/"chain") _ multiplier:Multiplier? {
	return {name: 'gainChains', amount: amount, multiplier: multiplier}
}

//Card effects
CardEffect = CardPreEffect/CardPostEffect/AddCounters/PutCounters
CardPreEffect = effect:(EffectList/ Play / DealDamage / ReadyAndUse / ReadyAndFight 
/ Ready / Use / Destroy / Sacrifice / Purge / Exalt / Ward / RemoveWard / Enrage 
/ Stun / Unstun / Exhaust / ArchiveTarget / Look / Heal / MayFight) _ 
target:GeneralCardTarget _
_ splash:Splash? _ multiplier:Multiplier? _ noPrevent:CannotBePrevented? _ AsIfItWereYours? {
	return Object.assign(effect, {target, splash, multiplier, noPrevent})
}

CardPostEffect = target:GeneralCardTarget _ effect:(Captures) _ hypnosis:("from" _ ("its"/"their") _"own side")? {
	return Object.assign(effect, {
      target, 
      player: hypnosis != null? 'controller' : 'controllerOpponent'
    })
}

Play = "play"i {return {name: "play"};}

AddCounters = "give"i _ target:GeneralCardTarget _ amount:Number _ "+1 power counter" "s"? {
	return {name: 'addPowerCounters', amount, target};
}

PutCounters = "Put"i _ amount:Number _ "+1 power counter" "s"? _ "on" _ target:GeneralCardTarget {
	return  Object.assign({name: 'addPowerCounter', amount}, {target:target})
}

Captures = "Captures"i _ amount:(Number/"all of your opponent’s") ("<A>"/"A") {
	return {name: 'capture', amount: amount}
}

DealDamage = "Deal"i _ amount:Number ("<D>"/"D") _ "to" {
	return {name: 'dealDamage', amount: amount}
}

Splash = ", with" _ amount:Number ("<D>"/"D") _ "splash" {
	return amount
}

CannotBePrevented = ". This damage cannot be prevented by armor."i { return true }

Ready = "Ready"i {
	return {name: 'ready'}
}

Use = "Use"i {
	return {name: 'use'}
}

AsIfItWereYours = "as if it were yours"

ReadyAndUse = "Ready and use"i {
	return {name: 'readyAndUse'}
}

ReadyAndFight = "Ready and fight with"i {
	return {name: 'readyAndFight'}
}

Fight = "fight with"i {
	return {name: 'fight'}
}

EffectList = effects:(e:ListableEffect ","? _ {return e;})* _ "and" _ lastEffect:ListableEffect {
	return {name: 'sequence', effects:[...effects, lastEffect]}
}
ListableEffect = Ready/Use/Fight/Exalt/Heal/Ward


Destroy = "Destroy"i {
	return {name: 'destroy'}
}

Sacrifice = "Sacrifice"i {
	return {name: 'sacrifice'}
}

Purge = "Purge"i {
	return {name: 'purge'}
}

Exalt = "Exalt"i {
	return {name: 'exalt'}
}

Ward = "Ward"i {
	return {name: 'ward'}
}

RemoveWard = "Remove a ward from"i {
	return {name: 'removeWard'}
}

Enrage = "Enrage"i {
	return {name: 'enrage'}
}

Stun = "Stun"i {return {name: 'stun'}}
Unstun = "Unstun"i {return {name: 'unstun'}}

Heal = ("Fully heal"i {	return {name: 'heal', fully: true }}
/ "heal"i _ amount:Number _ "damage from" {	return {name: 'heal', amount }})

Exhaust = "Exhaust"i {
	return {name: 'exhaust'}
}

ArchiveTarget = "Archive"i {
	return {name: 'archive'}
}

Look = "Look at"i {
	return {name: 'look'}
}

//"Give" effects
GiveEffect = "Give" _ target:GeneralCardTarget _ amount:Number _ "+1 power counter" "s"? {
	return  Object.assign({name: 'addPowerCounter', amount}, {target:target})
}

//Card movement effects - these are worded in more complex ways than other card-related effects.
MoveCardEffect = MoveFromPlay / DiscardFromHand / ArchiveFromHand / Revive

MoveFromPlay = ("Return"i/"Shuffle"i/"Put"i) _ target:GeneralCardTarget _ ("to the top of"/"to"/"into"/"on top of") _ player:PlayerTarget? _ location:("hand"/"deck"/"archives") "s"? {
    let name = "returnTo" + location.charAt(0).toUpperCase() + location.slice(1)
    return {name, target} //Ignore player target, assumed for most movement.
}

DiscardFromHand = name:("Discard"i/"Purge"i) _ target:GeneralCardTarget _ "from" _ player:PlayerTarget _ location:("hand"/"deck"/"archives") "s"? {
    return {
    	name: name.toLowerCase(),
    	target: Object.assign(target, {
            location: location, 
            controller: player
        })
    }
}

ArchiveFromHand = name:"Archive"i _ "a card" _ "from"? _ player:PlayerTarget? _ location:("hand"/"deck")? "s"? {
    return {
    	name: name.toLowerCase(),
    	target: {
        	mode: "exactly",
            count: 1,
        	type: null, 
            location: location || "hand", 
            controller: player || "self"
        }
    }
}

Revive = ("Return"i/"Shuffle"i) _ target:GeneralCardTarget _ "from" _ player:PlayerTarget? _ "discard pile to" _ PlayerTarget? _ location:("hand"/"deck") "s"? {
    let name = "returnFromDiscardTo" + location.charAt(0).toUpperCase() + location.slice(1)
    return {name, target} //Ignore player target, assumed for most movement.
}

//Amber movement effects are also worded in more complex ways
MoveAmberEffect = "Move"i _ amount:("each"/Number) _ "A" _ ("on"/"from") _ GeneralCardTarget _ "to" _ 
destination:("the common supply"/PlayerTarget _ "pool"/GeneralCardTarget) {
	return {name: "removeAmber", all:amount == "each", amount, destination};
}/"Move"i _ amount:("each"/Number) _ "A" _ ("on"/"from") _ GeneralCardTarget _ "to" _ PlayerTarget _ "pool"




MayBeUsed = e:MayFight {return [e]}
MayFight = "may fight" { return {name: 'mayFight'}; }
MayUse = "may use" { return {name: 'mayUse'}; }

Quote = [\“"”]


//Card targetting
GeneralCardTarget = (DeckCard/NeighborTarget/Self/CardTarget _ "and" _ CardTarget/CardTarget/ItTarget/UpgradedCreature)
Self = "$this"
UpgradedCreature = "this creature"i {return {mode: "upgradedCreature"}}
CardTarget = targetCount:CardTargetCount  _ minmax:MostPowerful? _ other:OtherSpecifier? _ damaged:DamagedSpecifier? 
_ controller:ControllerSpecifier? _ neighbor:NeighborSpecifier? _ flank:FlankSpecifier? 
_ house:HouseSpecifier? _ base:BaseCardTarget _ nonFlank:NonFlankSpecifier? _center:CenterSpecifier?
_ hasAmber:HasAmberSpecifier? _ attached:AttachedToSpecifier? _ chosenHouse:ChosenHouseSpecifier? _ power:PowerSpecifier?
_ location:LocationSpecifier? _ controlledBy:ControlledBySpecifier? {
	return Object.assign({
    	type: base.type,
        controller: controller || controlledBy, 
        location:location,
        conditions: [minmax, other, damaged, neighbor, flank, nonFlank, _center, house, hasAmber, attached, chosenHouse, power].concat(base.conditions).filter(x => x !== null)
    }, targetCount)
}
NeighborTarget = "Each of $this’"i "s"? _ "neighbors" {
	return Object.assign({
    	type: "creature",
        conditions: [{name: "neighboring"}]
    })
}
DeckCard = "the top"i _ amount:Number? _ "card""s"? " of your deck" {
	return {name:"topdeck", amount}
}

BaseCardTarget = trait:TraitSpecifier? _ house:HouseSpecifier? _ type:CardType {return{type, conditions:[trait, house]};} /
	t:TraitSpecifier {return{conditions:[t], type:"creature"};}

CardTargetCount = OneTarget / UpToTargets / NoTargets / AtLeastTargets / EachTarget
EachTarget = ("each"i/"all"i)? {return {mode: "all"}}
NoTargets = ("no"i) {return {mode:"exactly", count:0}}
OneTarget = ( "an"i / "a"i / "the"i) {return {mode:"exactly", count:1}}
UpToTargets = "up to"i _ count:Number {return {mode:"upTo", count}}
AtLeastTargets = count:Number _ "or more" {return {mode:"atLeast", count}}
ItTarget = ("it"i/"that"i _ CardType) {return {mode: "trigger"}}

OtherSpecifier = "other" {return {name: "other"};}
FlankSpecifier = "flank"i {	return {name: "flank"};}
NeighborSpecifier = "neighboring"i {return {name: "neighboring"};}

DamagedSpecifier = negate:"un"i? "damaged" {
	let c = {name: "damaged"};
	return negate != null ? {name: "not", condition: c} : c;
}

TraitSpecifier = negate:"non-"i? trait:Trait {
	let c = {name: "trait", trait: trait.toLowerCase()}
    return negate != null ? {name: "not", condition: c} : c;
}

HouseSpecifier = negate:"non-"i? house:House {
	let c = {name: "house", house: house.toLowerCase()};
	return negate != null ? {name: "not", condition: c} : c;
}

ControllerSpecifier = (("friendly"i/"your"i) {return "self";}
/ ("enemy"i/"opponent’s"i) {return "opponent";})
ControlledBySpecifier = "controlled by any player" {return null;}

NonFlankSpecifier = "that is"? _ "not on a flank"i {
	return {name: "not", condition: {name: "flank"}}
}

CenterSpecifier = "in the center of its controller’s battleline."i {
	return {name: "center"}
}

PowerSpecifier = "with power" _ vs:Number _ "or" _ compare:("lower"/"higher") {
	return {name: compare, check:"power", vs}
}

MostPowerful = ("most"/"least") _ "powerful"

HasAmberSpecifier = "with" _ negate:"no"? _ "A on it"  {
	let c = {name: "hasAmber"};
	return negate != null ? {name: "not", condition: c} : c;
}

AttachedToSpecifier = ("attached to"/"on") _ target:GeneralCardTarget  {
	return {name: "attached", target};
}

LocationSpecifier = "from" _ (PlayerTarget/"a") _"discard pile"

ChosenHouseSpecifier = "of that house" {return {name: "chosenHouse"};}

//Descriptors
House = "brobnar"i / "dis"i / "logos"i / "mars"i / "sanctum"i / "shadows"i / "untamed"i / "saurian"i / "star alliance"i {
	return text().replace(" ", "");
}
Trait = "mutant"i / "shard"i / "cat"i / "beast"i / "agent"i / "human"i / "scientist"i /"giant"i / "demon"i / "knight"i / "dinosaur"i / "thief"i / "martian"i / "robot"i / "sin"i / "horseman"i
CardType = type:(a:"action"i _ "card"? {return a;}/ "artifact"i / "creature"i / "upgrade"i / "card"i) "s"? {
	return type.toLowerCase() != 'card' ? type : null;
}

//Conditions
IfCondition = "If"i _ c:Condition {return c;}
WhileCondition = "While"i _ c:Condition {return c;}

Condition = c:(
PlayerTarget _ ("has"i/"have"i) _ Number ("A"/"<A>")_ "or" _ ("more"/"less")"," /
"you control more creatures than your opponent"i /
"it is not your turn,"i {return {name:"activePlayer", player:"opponent"}} /
CardTarget _ "was destroyed this turn,"i/
"it is your turn,"i {return {name:"activePlayer", player:"self"}}/
"there are"i _ CardTarget _ "in play"? ","i/
GeneralCardTarget _ "is in the center of your battleline,"i)
{return c;}

// Modifiers
Multiplier = "once"? _ "For"i _ (
"each" _ not:"un"? _"forged key" _ PlayerTarget _ ("have"/"has")
/"each A in your pool"
/"each neighbor it has"
/TriggerMultiplier
/CardTarget) //This is actually just a subset of card counting multipliers

TriggerMultiplier = CardTarget _ trigger:("healed this way")

//Basics
Number = n:(("a"/"one") {return 1;} / "two" {return 2;} / "three" {return 3;} / Integer)
_ sign:("additional" {return 1;}/"less" {return -1;})? { return n*(sign || 1);}

Integer = sign:[+\-–]? number:[0-9]+ {
	return sign == '-' || sign == '–' ? -parseInt(number): parseInt(number);
}

_ "whitespace" = [  ﻿\u202f]*

QuotedSection = "“" [^”“]+ [“”]

/* Pattern - matching comma/and/or based lists:
ThingList = items:(e:Thing _ And _ {return e;})* _ item:Thing {
	return [...items, item]
}
or
ThingList = item:Thing items:(_ And _ e:Thing {return e;})* {
	return [item, ...items]
}
*/
And = ("," _ "and"/"and,"/"and"/",")
Or = ("," _ "or"/"or,"/"or"/",")