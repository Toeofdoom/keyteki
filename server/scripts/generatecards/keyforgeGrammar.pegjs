//Structure
Lines = line:Line tail:(NewLine l:Line {return l;})* NewLine? {
	return [line, ...tail].filter((l) => !Array.isArray(l) || l.length > 0)
}

Line = ability:(Keywords / BoldAbility / PersistentEffect / GeneralTrigger / ReminderText / _)_ {
	return ability
}

NewLine = [\n\r\u000b]+ {
	return { name: "newline"}
}

//Overall effect formats
//"Bold" effects (Play, fight, reap, destroyed etc.)
BoldAbility = trigger:BoldTrigger tail:("/" t:BoldTrigger {return t;})* ": " effect:TriggeredEffect {
	return {name: 'bold', trigger:trigger, effect:effect, extraTriggers: tail}
}

BoldTrigger = ("Play" / "Reap" / "Before Fight" / "Fight" / "Destroyed" / "Action" / "Omni") {
	if (text() == "Before Fight") return "beforeFight";
	return text().toLowerCase();
}

TriggeredEffect = effect:(SingleEffect) ReminderText? "."? ReminderText? _ 
tail:(u:SingleSubsequentEffect "."? _ ReminderText? {return u;} )* {
	return [effect,...tail]
}

SingleEffect = optional:"You may"i? _ effect:(PlayerEffect / CaptureAmber / CardEffect / GiveEffect / MoveAmberEffect / MoveCardEffect / TimeLimitedEffect / UnknownEffect) {
	let extras = {
    	optional: optional != null
    }
    return Object.assign(effect, extras)
}

SingleSubsequentEffect = then:ThenCondition? _ effect:SingleEffect {
    return Object.assign(effect, then)
}

ThenCondition = condition:(
	"If you do," {return null}/
    "If this damage destroys that creature," {return "destroysTarget"}) {
    return {
    	then: true,
        condition
    }
}

TimeLimitedEffect = duration:Duration "," _ effect:(PersistentEffect/GeneralTrigger) {
	return {name:duration, durationEffect:effect}
}

Duration = "For the remainder of the turn"i {return "forRemainderOfTurn"} /
"during your opponent’s next turn"i {return "next"}

//Persistent effects.
PersistentEffect = target:(CardTarget/UpgradedCreature)? _ effects:(PersistentPlayerEffect/EntersPlayAbility/CardPersistentEffect) "."? _ ReminderText? {
    return {name: 'persistentEffect', target, effects}
}

EntersPlayAbility = Self _ "enter" "s"? " play" _ state:("stunned"i/"ready"i) {
	let effectName = 'entersPlay' + state.charAt(0).toUpperCase() + state.slice(1);
	return [{name: effectName}]
}

CardPersistentEffect = a:(GetsStats/GainsAbility) _ "and"i? _ b:GainsAbility? "."? {
	return (a || []).concat(b || []).filter(x => x !== null)
}

PersistentPlayerEffect = target: PlayerTarget _ "keys cost " amount:Number "A" {
	return {name: "modifyKeyCost", target, amount};
}

GeneralTrigger = GeneralPreTrigger/GeneralPostTrigger

GeneralPreTrigger = ("Each time"/"After") _ trigger:Trigger "," _ playerTarget:PlayerTarget? _ effect:SingleEffect "."? {
	return {name: "reaction", trigger, effect, playerTarget}
}
GeneralPostTrigger = playerTarget:PlayerTarget? _ effect:SingleEffect _ "Each time"i _ trigger:Trigger {
	return {name: "reaction", trigger, effect, playerTarget}
}

Trigger = PreTrigger / PostTrigger

PreTrigger = eventPlayer:PlayerTarget? _ trigger:"play"i "s"? _ card:CardTarget {
	return {trigger, card: Object.assign(card, {eventPlayer})}
}

PostTrigger =card:CardTarget _ trigger:TriggerType _ condition:"during your turn"? {
	return {trigger, card, condition}
}

TriggerType = "is destroyed" {return "destroyed"}
/"reaps" {return "reap"}
/("fights"/"is used to fight") {return "fight"}

//Player effect section - for abilities that target a single player
PlayerEffect = target:PlayerTarget? _ effect:(GainAmber / LoseAmber / StealAmber / GainChains / DrawCards / DiscardCards) {
	let info = {};
	if (target) info.targetPlayer = target;
	return Object.assign(effect, info);
}

PlayerTarget = ("Your Opponent"i "'s"? {return "opponent"}
/ "You"i "r"? {return "self"}
/ ("their owners’"i/"each player’s"i) {return null;}
/"its owner" {return "owner"}
/"its opponent" {return "controllerOpponent"})

//NumericalPlayerEffect...
GainAmber = "Gain"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'gainAmber', amount: amount, multiplier: multiplier}
}

StealAmber = "Steal"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'steal', amount: amount, multiplier: multiplier}
}

CaptureAmber = "Capture"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'capture', amount: amount, multiplier: multiplier}
}

LoseAmber = "Lose"i "s"? _ amount:Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'loseAmber', amount: amount, multiplier: multiplier}
}

DrawCards = "Draw"i "s"? _ amount:Number _ ("cards"/"card") _ multiplier:Multiplier? {
	return {name: 'draw', amount: amount, multiplier: multiplier}
}

DiscardCards = "Discard"i "s"? _ amount:Number _ random:"random"i? _ ("cards"/"card") _ "from" _ ("your"i/"their"i) _ location:("hand") {
	return {
		name: random != null ? 'discardAtRandom' : 'discard', 
		amount: amount, 
		targetPlayer: 'self', 
		location: location
	}
}

GainChains = "Gain"i "s"? _ amount:Number _ ("chains"/"chain") _ multiplier:Multiplier? {
	return {name: 'gainChains', amount: amount, multiplier: multiplier}
}

//Card effects
CardEffect = CardPreEffect/CardPostEffect
CardPreEffect = effect:(DealDamage / ReadyAndUse / ReadyAndFight / Ready / Use / Destroy / Sacrifice / Purge / Exalt / Ward / Enrage / Stun / Exhaust / ArchiveTarget / Heal) _ target:(Self/CardTarget/ItTarget) {
	return Object.assign(effect, {target:target})
}

CardPostEffect = target:(Self/CardTarget/ItTarget) _ effect:(Captures) {
	return Object.assign(effect, {target:target})
}

Captures = "Captures"i _ amount:Number ("<A>"/"A") {
	return {name: 'capture', amount: amount}
}

DealDamage = "Deal"i _ amount:Number ("<D>"/"D") _ "to" {
	return {name: 'dealDamage', amount: amount}
}

Ready = "Ready"i {
	return {name: 'ready'}
}

Use = "Use"i {
	return {name: 'use'}
}

ReadyAndUse = "Ready and use"i {
	return {name: 'readyAndUse'}
}

ReadyAndFight = "Ready and fight with"i {
	return {name: 'readyAndFight'}
}

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

Enrage = "Enrage"i {
	return {name: 'enrage'}
}

Stun = "Stun"i {
	return {name: 'stun'}
}

Heal = "Fully heal"i {
	return {name: 'heal', fully: true }
}

Exhaust = "Exhaust"i {
	return {name: 'exhaust'}
}

ArchiveTarget = "Archive"i {
	return {name: 'archive'}
}

//"Give" effects
GiveEffect = "Give" _ target:(Self/CardTarget/ItTarget) _ amount:Number _ "+1 power counters" {
	return  Object.assign({name: 'addPowerCounter', amount}, {target:target})
}

//Card movement effects - these are worded in more complex ways than other card-related effects.
MoveCardEffect = ("Return"/"Shuffle") _ target:(Self/CardTarget/ItTarget) _ "to" _ player:PlayerTarget? _ location:("hand"/"deck") "s"? {
	let actionName = "returnTo" + location.charAt(0).toUpperCase() + location.slice(1)
    return  Object.assign({name: actionName}, {target:target})
}

//Amber movement effects are also worded in more complex ways
MoveAmberEffect = "Move each A" _ ("on"/"from") _ "this creature to the common supply" {
	return {name: "removeAmber", all:true};
}

//Upgrades
GainsAbility = "gains"i ","? _ ability:(
keywords:Keywords "and,"? _{return {name: "gainKeywords", keywords: keywords.keywords};} / 
Quote bold:BoldAbility Quote {return {name: "gainAbility", ability:bold};} )+ {
	return ability
}

GetsStats = "gets" _ statChanges:(stat:StatChange _ "and"? _ {return stat;})+ {
	return statChanges;
}

StatChange = amount:Number _ stat:("power"i/"armor"i){
	return {name: "modify"+ stat.charAt(0).toUpperCase() + stat.slice(1), amount};
}

Quote = [\“"”]


//Card targetting
Self = "$this"
UpgradedCreature = "this creature"i {return {mode: "upgradedCreature"}}
CardTarget = targetCount:CardTargetCount  _ other:OtherSpecifier? _ damaged:DamagedSpecifier? _ controller:ControllerSpecifier? _ neighbor:NeighborSpecifier? _ flank:FlankSpecifier? _ house:HouseSpecifier? _ base:BaseCardTarget _ nonFlank:NonFlankSpecifier? _ hasAmber:HasAmberSpecifier? {
	return Object.assign({
    	type: base.type != null ? base.type : "creature",
        controller: controller, 
        conditions: [other, damaged, neighbor, flank, nonFlank, house, hasAmber].concat(base.conditions).filter(x => x !== null)
    }, targetCount)
}

BaseCardTarget = trait:TraitSpecifier? _ house:HouseSpecifier? _ type:CardType {return{type, conditions:[trait, house]};} /
	t:TraitSpecifier {return{conditions:[t], type:null};}

CardTargetCount = EachTarget / OneTarget / UpToTargets
EachTarget = ("each"i/"all"i) {return {mode: "all"}}
OneTarget = ( "an"i / "a"i) {return {mode:"exactly", count:1}}
UpToTargets = "up to"i _ count:Number {return {mode:"upTo", count}}
ItTarget = ("it"i) {return {mode: "trigger"}}

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

ControllerSpecifier = ("friendly"i / "enemy"i) {
	return text().toLowerCase() == "friendly" ? "self" : "opponent";
}

NonFlankSpecifier = "that is"? _ "not on a flank"i {
	return {name: "not", condition: {name: "flank"}}
}

HasAmberSpecifier = "with" _ negate:"no"? _ "A on it"  {
	let c = {name: "hasAmber"};
	return negate != null ? {name: "not", condition: c} : c;
}

//Descriptors
House = "brobnar"i / "dis"i / "logos"i / "mars"i / "sanctum"i / "shadows"i / "untamed" / "saurian"i / "star alliance"i {
	return text().replace(" ", "");
}
Trait = "mutant"i / "shard"i / "cat"i / "beast"i / "agent"i / "human"i / "scientist"i /"giant"i / "demon"i / "knight"i / "dinosaur"i / "thief"i / "martian"i / "robot"i / "sin"i / "horseman"i
CardType = type:("action"i / "artifact"i / "creature"i / "upgrade"i) "s"? {
	return type
}

// Modifiers
Multiplier = "For each something something"

//Ignorable text section
Keywords = word:Keyword tail:(". " w:Keyword {return w;})* "."? _ ReminderText? {
	return {name: "keywords", keywords: [word, ...tail]}
}

Keyword = name:("Elusive"i / "Skirmish"i / "Taunt"i / "Poison"i / "Deploy"i / "Alpha"i / "Omega"i / "Assault"i / "Hazardous"i / "Invulnerable"i / e:"Enhance"i _ [A-Z]i+ {return e;}) _ count:Integer? {
	return {name: name.toLowerCase(), count};
}

ReminderText = _ "(" [^)]+ ")" _ {
	return {name: "reminderText", keywords: [text()]}
}

//Basics
Number = ("a"/"one") {return 1;} / "two" {return 2;} / "three" {return 3;} / Integer 
Integer = sign:[+-]? number:[0-9]+ {
	return sign == '-' ? -parseInt(text()): parseInt(text());
}

_ "whitespace" = [  ﻿\u202f]*

UnknownEffect = [$A-Z]i([^\n\r\u000b.“] / QuotedSection)* {
	return {name: 'unknown', text: text()}
}

QuotedSection = "“" [^”“]+ [“”]
