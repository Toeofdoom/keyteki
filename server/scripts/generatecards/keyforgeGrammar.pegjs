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

BoldTrigger = ("Play" / "Reap" / "Before Fight" / "Fight" / "Destroyed" / "Action" / "Omni") {
	if (text() == "Before Fight") return "beforeFight";
	return text().toLowerCase();
}


TriggeredEffect = effect:(SingleEffect) ReminderText? "."? ReminderText? _ tail:(u:SingleSubsequentEffect "." _ ReminderText? {return u;} )* {
	return [effect,...tail]
}

SingleEffect = optional:"You may"i? _ effect:(PlayerEffect / CaptureAmber / CardEffect / UnknownEffect) {
	let extras = {
    	optional: optional != null
    }
    return Object.assign(effect, extras)
}

SingleSubsequentEffect = ifYouDo:"If you do,"i? _ effect:SingleEffect {
	let extras = {
    	ifYouDo: ifYouDo != null
    }
    return Object.assign(effect, extras)
}


//Player effect section - for abilities that target a single player
PlayerEffect = target:PlayerTarget? _ effect:(GainAmber / LoseAmber / StealAmber / GainChains) {
	let info = {};
	if (target) info.targetPlayer = target;
	return Object.assign(effect, info);
}

PlayerTarget = ("Your Opponent"i / "You") {
	return text().toLowerCase().includes("opponent") ? "opponent" : "self";
}

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

GainChains = "Gain"i "s"? _ amount:Number _ "chains" _ multiplier:Multiplier? {
	return {name: 'gainChains', amount: amount, multiplier: multiplier}
}

Multiplier = UnknownEffect

//Card effects
CardEffect = effect:(DealDamage / ReadyAndUse / ReadyAndFight / Ready / Use / Destroy / Purge / Exalt) _ target:(Self/CardTarget) {
	return Object.assign(effect, {target:target})
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

Purge = "Purge"i {
	return {name: 'purge'}
}

Exalt = "Exalt"i {
	return {name: 'exalt'}
}

Self = "$this"

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
