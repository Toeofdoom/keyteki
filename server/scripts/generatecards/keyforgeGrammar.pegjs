//Structure
Lines = line:Line tail:(NewLine l:Line {return l;})* NewLine? {
	return [line, ...tail]
}

Line = ability:(Keywords / BoldAbility / PersistentEffect / ReminderText / _) {
	return ability
}

NewLine = [\n\r\u000b]+ {
	return { name: "newline"}
}

//Overall effect formats
PersistentEffect = (UnknownEffect "."? _)+ ReminderText?



BoldAbility = trigger:BoldTrigger tail:("/" t:BoldTrigger {return t;})* ": " effect:TriggeredEffect {
	return {name: 'bold', trigger:trigger, effect:effect, extraTriggers: tail}
}
BoldTrigger = "Play" / "Reap" / "Before Fight" / "Fight" / "Destroyed" / "Action" / "Omni"


TriggeredEffect = effect:(PlayerEffect / CaptureAmber / CardEffect / UnknownEffect) ReminderText? "."? ReminderText? _ tail:(u:UnknownEffect "." _ ReminderText? {return u;} )* {
	if(tail.length > 0)
		return [effect,...tail]
	return effect
}


//Player effect section - for abilities that target a single player
PlayerEffect = target:PlayerTarget? _ effect:(GainAmber / LoseAmber / StealAmber) {
	let info = {};
	if (target) info.targetPlayer = target;
	return Object.assign(effect, info);
}

PlayerTarget = ("Your Opponent"i / "You") {
	return text().toLowerCase().includes("opponent") ? "opponent" : "self";
}

//NumericalPlayerEffect...
GainAmber = "Gain"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'gainAmber', quantity: number, multiplier: multiplier}
}

StealAmber = "Steal"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'stealAmber', quantity: number, multiplier: multiplier}
}

CaptureAmber = "Capture"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'captureAmber', quantity: number, multiplier: multiplier}
}

LoseAmber = "Lose"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'loseAmber', quantity: number, multiplier: multiplier}
}
GainChains = "Gain"i "s"? _ number: Number "chains" _ multiplier:Multiplier? {
	return {name: 'gainChains', quantity: number, multiplier: multiplier}
}

Multiplier = UnknownEffect



/* ForgeAKey = "Gain " number: Number "<A>" {
	return `GainAmber - quantity ${number}`
}*/

//Card effects
CardEffect = effect:(DealDamage / ReadyAndUse / ReadyAndFight / Ready / Use / Destroy / Purge) _ target:(CardTarget) {
	return Object.assign(effect, {target:target})
}

DealDamage = "Deal"i _ amount:Number ("<D>"/"D") _ "to" {
	return {name: 'dealDamage', quantity: amount}
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

Purge = "Purge"i {
	return {name: 'purge'}
}

CardTarget = targetCount:CardTargetCount  _ other:OtherSpecifier? _ damaged:DamagedSpecifier? _ controller:ControllerSpecifier? _ flank:FlankSpecifier? _ trait:TraitSpecifier? _ house:HouseSpecifier? _  type:CardType _ nonFlank:NonFlankSpecifier? {
	return Object.assign({
    	type: type,
        controller: controller, 
        conditions: [other, damaged, flank, nonFlank, trait, house].filter(x => x !== null)
    }, targetCount)
}

CardTargetCount = ("each"/"all"/"another"/"an"/"a") {
	if (text() == "each" || text() == "all") return {mode: "all"};
    return {mode: "exactly", count: 1};
}
OtherSpecifier = "other" {
	return {name: "other"};
}

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

FlankSpecifier = "flank"i {
	return {name: "flank"}
}

NonFlankSpecifier = "that is not on a flank"i {
	return {name: "not", condition: {name: "flank"}}
}

//Descriptors
House = "brobnar"i / "dis"i / "logos"i / "mars"i / "sanctum"i / "shadows"i / "untamed" / "saurian"i / "star alliance"i
Trait = "mutant"i / "shard"i / "cat"i / "beast"i / "agent"i
CardType = type:("action"i / "artifact"i / "creature"i / "upgrade"i) "s"? {
	return type
}

//Ignorable text section
Keywords = word:Keyword tail:(". " w:Keyword {return w;})* "."? _ ReminderText? {
	return {name: "keywords", keywords: [word, ...tail]}
}

Keyword = ("Elusive" / "Skirmish" / "Taunt" / "Poison" / "Deploy" / "Alpha" / "Omega" / "Assault " Integer / "Hazardous " Integer / "Enhance" _ [A-Z]i+) {
	return text();
}

ReminderText = _ "(" [^)]+ ")" _ {
	return {name: "reminderText", keywords: [text()]}
}

//Basics
Number = Integer
Integer = [0-9]+ {return parseInt(text())}

_ "whitespace" = [  ﻿\u202f]*

UnknownEffect = [$A-Z]i([^\n\r\u000b.“] / QuotedSection)* {
	return {name: 'unknown', text: text()}
}

QuotedSection = "“" [^”“]+ [“”]
