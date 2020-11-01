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
GainAmber = "Gain" "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'gainAmber', quantity: number, multiplier: multiplier}
}

StealAmber = "Steal" "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'stealAmber', quantity: number, multiplier: multiplier}
}

CaptureAmber = "Capture" "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'captureAmber', quantity: number, multiplier: multiplier}
}

Multiplier = UnknownEffect

LoseAmber = "Lose"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'loseAmber', quantity: number, multiplier: multiplier}
}

/* ForgeAKey = "Gain " number: Number "<A>" {
	return `GainAmber - quantity ${number}`
}*/

//Card effects
CardEffect = effect:(DealDamage) _ "to" _ target:(CardTarget) {
	return Object.assign(effect, {target:target})
}

DealDamage = "Deal"i _ amount:Number ("<D>"/"D") {
	return {name: 'dealDamage', quantity: amount}
}

CardTarget = ("an"/"a")  _ controller:ControllerSpecifier? _ type:CardType {
	return {type: type, controller:controller}
}

ControllerSpecifier = ("friendly"i / "enemy"i) {
	return text().toLowerCase() == "friendly" ? "self" : "opponent";
}

//Descriptors
House = "brobnar"i / "dis"i / "logos"i / "mars"i / "sanctum"i / "shadows"i / "untamed" / "saurian"i / "star alliance"i
Trait = "mutant"i / "shard"i / "cat"i / "beast"i
CardType = "action"i / "artifact"i / "creature"i / "upgrade"i

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
