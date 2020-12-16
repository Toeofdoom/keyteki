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
BoldAbility = trigger:BoldTrigger extraTriggers:("/" t:BoldTrigger {return t;})* ": " effect:ActionList {
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
pe:(PersistentPlayerEffect/PersistentCardAction)
_ multiplier:Multiplier? [.;]? _ ReminderText? {
    return Object.assign({name: 'persistentEffect', multiplier, condition}, pe)
}

PersistentPlayerEffect = target:PlayerTarget? _ effect:SinglePersistentPlayerEffect {
	return {
		target, 
		effects: [effect]
	}
} / SpecialPersistentPlayerEffect //For effects with more unique formats.

PersistentCardAction = target:GeneralCardTarget? _ effects:PersistentCardActionList [.;]? {
	return  {
		target, 
		effects: flattenArrays(effects).filter(x => x !== null)
	}
}

PersistentCardActionList = item:SinglePersistentCardEffect _ items:(_ And _ e:SinglePersistentCardEffect {return e;})* {
	return [item, ...items]
}

//General triggers
GeneralTrigger = SpontaneousTrigger/GeneralPersistentTrigger/GeneralDurationTrigger/PhaseTrigger

//Spontaneous means that as soon as a condition is met, a certain effect will occur
SpontaneousTrigger = IfCondition _ ActionList

//Persistent effects typically list the trigger, then the effect. Duration effects typically reverse that.
GeneralPersistentTrigger = ("Each time"i/"After"i) _ trigger:Trigger "," _ effect:ActionList [.;]? {
	return {name: "reaction", trigger, effect}
}
GeneralDurationTrigger = effect:SingleAction _ "each time"i _ trigger:Trigger {
	return {name: "reaction", trigger, effect}
}

//Phase or turn based triggers use different wording
PhaseTrigger = "At the"i _ part:("start"/"end") _ "of" _ player:PlayerTarget _ 
	trigger:("turn"{return null}/"“ready cards” step" {return "onCardsReadied"}) "," 
	effect:ActionList [.;]? {
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
UnknownAction = [$A-Z]i([^\n\r\u000b.;“] / QuotedSection)* {
	return {name: 'unknown', text: text()}
}

UnknownFragment = _ ([^\n\r\u000b.;“] / QuotedSection)+ {
	return {name: 'unknown', text: text()}
}

//Actions
ActionList = item:SingleAction items:(_ ([.;]/And)? _ u:SingleSubsequentAction  {return u;})* [.;]? {
	return [item,...items]
}

//TODO: Move time limited effects to the front to support permission effects (e.g. "you may play a non-logos card" )
//so wording doesn't overlap with the "optional" check.
SingleAction = condition:IfCondition? _ optional:"You may"i? _ effect:(
MoveCardAction / PlayerAction / CardAction / MoveAmberAction 
/ TimeLimitedEffect / ChooseTarget / UnknownAction) 
condition2:IfCondition? {
	let extras = {
    	optional: optional != null,
        condition: condition || condition2
    }
    return Object.assign(effect, extras)
}

ChooseTarget = ("Choose a house"i/"Choose"i _ StandardCardTarget)

SingleSubsequentAction = then:ThenCondition? _ effect:SingleAction _ replacement:"instead"? {
    return Object.assign(effect, then, {replacement:replacement != null})
}

ThenCondition = condition:(
	"If you do,"i {return null}/
    "Otherwise,"i {return {name:"otherwise"}}/
    "If this damage destroys that creature,"i {return {name:"destroysTarget"};}) {
    return {
    	then: true,
        condition
    }
}/condition:("If it is not destroyed,"i {return {name:"not", condition:{name:"destroysTarget"}};}) {
    return {
    	then: false,
        condition
    }
}

//Player actions section - for actions that target players
PlayerAction = targetPlayer:PlayerTarget? _ effect:SinglePlayerAction _ multiplier:Multiplier? {
	let info = {};
	if (targetPlayer) info.targetPlayer = targetPlayer;
	return Object.assign(effect, info);
}

//TODO: Add list support.
SinglePlayerAction = Forge / AmberAction / GainChains / DrawCards / DiscardRandomCards 

Forge = "forge a key at current cost"i {
	return {name: 'forgeAKey'}
}

AmberAction = type:AmberActionType _ amount:AmberCount {
	return {name: type, amount}
}

AmberActionType = "Gain"i "s"? { return 'gainAmber';}
	/"Steal"i "s"? { return 'steal'; }
	/"Capture"i "s"? { return 'capture'; }
	/"Lose"i "s"? {	return 'loseAmber'; }

AmberCount = amount:Number ("<A>"/"A") { return amount; }
	/("all of it"/("each"/"all of" _ PlayerTarget) _ ("<A>"/"A")) {return "all"; }

DrawCards = "Draw"i "s"? _ amount:Number _ ("cards"/"card") {
	return {name: 'draw', amount}
}

DiscardRandomCards = "Discard"i "s"? _ amount:Number _ "random card"i "s"? _ "from" _ PlayerTarget _ "hand" {
	return {name: 'discardAtRandom', amount	};
}

GainChains = "Gain"i "s"? _ amount:Number _ "chain"i "s"? {
	return {name: 'gainChains', amount}
}

//Card effects
CardAction = StandardFormatCardAction/CardCapturesAction/GiveCounters

StandardFormatCardAction = actions:CardActionList _ target:GeneralCardTarget 
_ multiplier:Multiplier? _ splash:SplashSuffix?_ noPrevent:UnpreventableSuffix? _ AsIfItWereYours? {
	let action = actions.length === 1 ? actions[0] : {name:"sequence", actions}
	return Object.assign(action, {target, splash, multiplier, noPrevent})
}

CardActionList = item:SingleCardAction items:(_ And _ e:SingleCardAction {return e;})* {
	return [item, ...items]
}

//Unusual formats
CardCapturesAction = target:GeneralCardTarget _ "Captures"i _ amount:AmberCount 
	_ hypnosis:("from" _ ("its"/"their") _"own side")? {
	return {
		name: 'capture', 
		amount,
		target,
		player: hypnosis != null? 'controller' : 'controllerOpponent'
    };
}

GiveCounters = "give"i _ target:GeneralCardTarget _ amount:Number _ "+1 power counter" "s"? {
	return {name: 'addPowerCounters', amount, target};
}

//Standard formats
SingleCardAction = Play / DealDamage / Ready / Use / Fight / Destroy / Sacrifice / Purge 
	/ Exalt / Ward / RemoveWard / Enrage / Stun / Unstun / Exhaust / ArchiveTarget 
	/ Look / Heal / FullyHeal / MayFight / PutCounters

DealDamage = "Deal"i _ amount:Number ("<D>"/"D") _ "to" {return {name: 'dealDamage', amount}}
SplashSuffix = ", with" _ amount:Number ("<D>"/"D") _ "splash" {return amount; }
UnpreventableSuffix = ". This damage cannot be prevented by armor."i { return true; }

Use = "Use"i {return {name: 'use'}}
AsIfItWereYours = "as if it were yours"

PutCounters = "Put"i _ amount:Number _ "+1 power counter" "s"? _ "on" {
	return  {name: 'addPowerCounter', amount}
}

Play = "play"i {return {name: "play"};}
Ready = "Ready"i {return {name: 'ready'}}
Fight = "fight with"i {return {name: 'fight'}}
Destroy = "Destroy"i {return {name: 'destroy'}}
Sacrifice = "Sacrifice"i {return {name: 'sacrifice'}}
Purge = "Purge"i {return {name: 'purge'}}
Exalt = "Exalt"i {return {name: 'exalt'}}
Ward = "Ward"i {return {name: 'ward'}}
RemoveWard = "Remove a ward from"i {return {name: 'removeWard'}}
Enrage = "Enrage"i {return {name: 'enrage'}}
Stun = "Stun"i {return {name: 'stun'}}
Unstun = "Unstun"i {return {name: 'unstun'}}
Exhaust = "Exhaust"i {return {name: 'exhaust'}}
ArchiveTarget = "Archive"i {return {name: 'archive'}}
Look = "Look at"i {return {name: 'look'}}
Heal = "heal"i _ amount:Number _ "damage from" {return {name: 'heal', amount }}
FullyHeal = "Fully heal"i {	return {name: 'heal', fully: true }}

//Card movement effects - these are worded in more complex ways than other card-related effects.
MoveCardAction = MoveFromAToB

MoveFromAToB = name:MoveCardActionType _ target:GeneralCardTarget _ 
	locationA:("from" _ l:SpecificLocation {return l;})? _
	locationB:(("to"/"into"/"on") _ l:SpecificLocation {return l;})? {
	return {
    	name,
		target: locationA != null ? Object.assign(target, locationA) : target,
		location: locationB
    }
}

SpecificLocation = sublocation:SubLocation? _ controller:(PlayerTarget/("an"/"a" {return "any";})) 
	_ location:CardLocation {
	return {controller, location};
}

SubLocation = "the"? _ "top of"
MoveCardActionType = "Return"i/"Shuffle"i/"Put"i/"Discard"i/"Purge"i/"Archive"i {return text().toLowerCase();}
CardLocation = "hand"i "s"? {return "hand"}
	/"deck"i "s"? {return "deck"}
	/"discard pile"i "s"? {return "discard"}
	/"archives"i {return "archives"}

//Amber movement effects are also worded in more complex ways
MoveAmberAction = "Move"i _ amount:AmberCount _ ("on"/"from") _ GeneralCardTarget _ "to" _ 
destination:AmberLocation {
	return {name: "removeAmber", amount, destination};
}

AmberLocation = "the common supply"/PlayerTarget _ "pool"/GeneralCardTarget

//Some actions apply an effect for a specific period of time.
TimeLimitedEffect = (duration:Duration "," _ effect:(PersistentEffect/GeneralPersistentTrigger/GeneralDurationTrigger) {
	return {name:duration, durationEffect:effect}
}/effect:PersistentEffect _ duration:Duration {
	return {name:duration, durationEffect:effect}
})

Duration = "For the remainder of the turn"i {return "forRemainderOfTurn"} /
"during your opponent’s next turn"i {return "lastingEffect"} //TODO: Correct this, lastingEffect also applies during the current turn

//Persistent effects
//Persistent player effects
SinglePersistentPlayerEffect = KeyCost/CantBeStolen
SpecialPersistentPlayerEffect = ModifyHandSize

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

//Persistent card effects, including upgrades
SinglePersistentCardEffect = GetsStats/GainsAbility/EntersPlayAbility/MayBeUsed/CannotEffect/LimitFightDamage

//Gets stats
GetsStats = "gets" _ statChanges:StatChangeList _ multiplier:Multiplier? {
	return statChanges.map((s) => Object.assign(s, {multiplier}));
}
StatChangeList = item:SingleStatChange items:(_ And _ e:SingleStatChange {return e;})* {
	return [item, ...items]
}
SingleStatChange = amount:Number _ stat:("power"i/"armor"i){
	return {name: "modify"+ stat.charAt(0).toUpperCase() + stat.slice(1), amount};
}

//Gains abilities
GainsAbility = "gains"i ","? _ abilities:GainAbilityList {return abilities}
GainAbilityList = items:(e:GainSingleAbility _ And _ {return e;})* _ item:GainSingleAbility {
	return [...items, item]
}
GainSingleAbility = keywords:Keywords _{return Object.assign(keywords, {name: "gainKeywords"});} 
	/ Quote ability:BoldAbility Quote {return {name: "gainAbility", ability};}

//Enters play
EntersPlayAbility = "enter" "s"? " play" _ states:CardStateList {
	return states.map((state) => ({name: 'entersPlay' + state.charAt(0).toUpperCase() + state.slice(1)}))
}
CardStateList = items:(i:CardState _ And _ {return i;})* _ item:CardState {
	return [...items, item]
}
CardState = ("stunned"i/"ready"i/"enraged"i/"exhausted"i)

//Other persistent card effects
CannotEffect = "cannot" _ effect:("reap"/"fight"/"be used"/"be dealt damage") {return [{name:"cannot", effect}];}
LimitFightDamage = "only deals" _ amount:Number "D when fighting" {return [{name:"limitFightDamage", amount}];}

//Permission effects - work in progress
MayBeUsed = e:(MayFight/MayUse) {return [e]}
MayFight = "may fight" { return {name: 'mayFight'}; }
MayUse = "may use" { return {name: 'mayUse'}; }

//Targetting
//Player targetting
PlayerTarget = ("Your Opponent"i ['’s]* {return "opponent"}
	/ "You"i "r"? {return "self"}
	/ ("their owner"i ['’s]*/"each player"i ['’s]*/"they"i/"their"i) {return "any";}
	/ "its owner" ['’s]* {return "owner"}
	/ "its controller" ['’s]* {return "controller"}
	/ "its opponent" ['’s]* {return "controllerOpponent"})

//Card targetting
GeneralCardTarget = (DeckCard/NeighborTarget/Self/StandardCardTarget _ "and" _ StandardCardTarget/StandardCardTarget/ItTarget/UpgradedCreature)

DeckCard = "the top"i _ amount:Number? _ "card""s"? " of your deck" {
	return {name:"topdeck", amount}
}
Self = "$this"
UpgradedCreature = "this creature"i {return {mode: "upgradedCreature"}}
NeighborTarget = "Each of $this’"i "s"? _ "neighbors" {
	return Object.assign({type: "creature", conditions: [{name: "neighboring"}]});
}
ItTarget = ("it"i/"that"i _ CardType) {return {mode: "trigger"}}

StandardCardTarget = targetCount:CardTargetCount  _ minmax:MostPowerful? _ other:OtherSpecifier? 
	_ damaged:DamagedSpecifier? _ controller:ControllerSpecifier? _ neighbor:NeighborSpecifier? 
	_ flank:FlankSpecifier? _ house:HouseSpecifier? _ base:BaseCardTarget 
	_ nonFlank:NonFlankSpecifier? _center:CenterSpecifier? _ hasAmber:HasAmberSpecifier?
	_ attached:AttachedToSpecifier? _ chosenHouse:ChosenHouseSpecifier? _ power:PowerSpecifier?
	_ controlledBy:ControlledBySpecifier? {
	return Object.assign({
    	type: base.type,
        controller: controller || controlledBy, 
        location:location,
        conditions: [minmax, other, damaged, neighbor, flank, nonFlank, _center, house, hasAmber, attached, chosenHouse, power].concat(base.conditions).filter(x => x !== null)
    }, targetCount)
}

//The core card target - need to at least specify a card type or a trait that implies a card type
BaseCardTarget = trait:TraitSpecifier? _ house:HouseSpecifier? _ type:CardType {return{type, conditions:[trait, house]};} /
	t:TraitSpecifier {return{conditions:[t], type:"creature"};}

//How many targets?
CardTargetCount = OneTarget / UpToTargets / NoTargets / AtLeastTargets / EachTarget
EachTarget = ("each"i/"all"i)? {return {mode: "all"}}
NoTargets = ("no"i) {return {mode:"exactly", count:0}}
OneTarget = ("an"i / "a"i / "the"i) {return {mode:"exactly", count:1}}
UpToTargets = "up to"i _ count:Number {return {mode:"upTo", count}}
AtLeastTargets = count:Number _ "or more" {return {mode:"atLeast", count}}

//Conditions before card
OtherSpecifier = "other" {return {name: "other"};}
FlankSpecifier = "flank"i {	return {name: "flank"};}
NeighborSpecifier = "neighboring"i {return {name: "neighboring"};}
MostPowerful = ("most"/"least") _ "powerful"

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

//Conditions after card
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

HasAmberSpecifier = "with" _ negate:"no"? _ "A on it"  {
	let c = {name: "hasAmber"};
	return negate != null ? {name: "not", condition: c} : c;
}

AttachedToSpecifier = ("attached to"/"on") _ target:GeneralCardTarget  {
	return {name: "attached", target};
}

ChosenHouseSpecifier = "of that house" {return {name: "chosenHouse"};}

//Conditions
IfCondition = "If"i _ c:Condition {return c;}
WhileCondition = "While"i _ c:Condition {return c;}

Condition = c:(
	PlayerTarget _ ("has"i/"have"i) _ Number ("A"/"<A>")_ "or" _ ("more"/"less")"," /
	"you control more creatures than your opponent"i /
	"it is not your turn,"i {return {name:"activePlayer", player:"opponent"}} /
	StandardCardTarget _ "was destroyed this turn,"i/
	"it is your turn,"i {return {name:"activePlayer", player:"self"}}/
	"there are"i _ StandardCardTarget _ "in play"? ","i/
	GeneralCardTarget _ "is in the center of your battleline,"i)
	{return c;}

// Modifiers
Multiplier = "once"? _ "For"i _ (
	"each" _ not:"un"? _"forged key" _ PlayerTarget _ ("have"/"has")
	/"each A in your pool"
	/"each neighbor it has" //This is actually just a subset of card counting multipliers
	/TriggerMultiplier
	/StandardCardTarget)

TriggerMultiplier = StandardCardTarget _ trigger:("healed this way")

//Descriptors
House = "brobnar"i / "dis"i / "logos"i / "mars"i / "sanctum"i / "shadows"i / "untamed"i 
	/ "saurian"i / "star alliance"i / "unfathomable"i {
	return text().replace(" ", "");
}

//Creature traits only - split if artifact traits are needed.
Trait = "mutant"i / "shard"i / "cat"i / "beast"i / "agent"i / "human"i / "scientist"i 
	/"giant"i / "demon"i / "knight"i / "dinosaur"i / "thief"i / "martian"i / "robot"i 
	/ "sin"i / "horseman"i {return text().toLowerCase();}

CardType = "action"i _ "card"? "s"? {return "action";}
	/ "artifact"i _ "card"? "s"? {return "artifact";}
	/ "creature"i _ "card"? "s"? {return "creature";}
	/ "upgrade"i _ "card"? "s"? {return "upgrade";}
	/ "card"i "s"? {return null;}

//Basics
Number = n:(("a"/"one") {return 1;} / "two" {return 2;} / "three" {return 3;} / Integer)
	_ sign:("additional" {return 1;}/"less" {return -1;})? { return n*(sign || 1);}

Integer = sign:[+\-–]? number:[0-9]+ {
	return sign == '-' || sign == '–' ? -parseInt(number): parseInt(number);
}

_ "whitespace" = [  ﻿\u202f]*

Quote = [\“"”]
QuotedSection = Quote [^”“]+ Quote

/* Pattern - matching comma/and/or based lists:
ThingList = item:Thing items:(_ And _ e:Thing {return e;})* {
	return [item, ...items]
}
*/
And = ("," _ "and"/"and,"/"and"/",")
Or = ("," _ "or"/"or,"/"or"/",")