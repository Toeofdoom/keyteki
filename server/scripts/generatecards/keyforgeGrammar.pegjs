//Keywords = word:Keyword tail:(", " w:Keyword {return w;})* "." reminder: ReminderText? {

/*Start = line:Line tail:("\n" l:Line {return l;})* {
	return {lines: [1,2,3, line]}
}*/

Lines = line:Line tail:(NewLine l:Line {return l;})* NewLine? {
	return [line, ...tail]
}

Line = ability:(Keywords / BoldAbility / PersistentEffect / ReminderText / _) {
	return ability
}

PersistentEffect = (UnknownEffect "."? _)+ ReminderText?

NewLine = [\n\r\u000b]+ {
	return { name: "newline"}
}

BoldAbility = trigger:BoldTrigger ": " effect:TriggeredEffect {
	return {name: 'bold', trigger:trigger, effect:effect}
}
BoldTrigger = SingleBoldTrigger
SingleBoldTrigger = "Play" / "Reap" / "Before Fight" / "Fight" / "Destroyed" / "Omni"
House = "brobnar" / "dis" / "logos" / "mars" / "sanctum" / "shadows" / "untamed" / "saurian" / "star alliance"

TriggeredEffect = effect:(PlayerEffect / UnknownEffect) ReminderText? "."? ReminderText? _ tail:(u:UnknownEffect "." _ ReminderText? {return u;} )* {
	if(tail.length > 0)
		return [effect,...tail]
	return effect
}

PlayerEffect = target:PlayerTarget? _ effect:(GainAmber / LoseAmber / StealAmber) {
	let info = {};
	if (target) info.target = target;
	return Object.assign(effect, info);
}

PlayerTarget = ("Your Opponent"i / "You") {
	return text().toLowerCase().includes("opponent") ? "opponent" : "you";
}

//NumericalPlayerEffect...
GainAmber = "Gain" "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'gainAmber', quantity: number, multiplier: multiplier}
}

StealAmber = "Steal" "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'stealAmber', quantity: number, multiplier: multiplier}
}

Multiplier = UnknownEffect

LoseAmber = "Lose"i "s"? _ number: Number ("<A>"/"A") _ multiplier:Multiplier? {
	return {name: 'loseAmber', quantity: number, multiplier: multiplier}
}

/* ForgeAKey = "Gain " number: Number "<A>" {
	return `GainAmber - quantity ${number}`
}*/

Keywords = word:Keyword tail:(". " w:Keyword {return w;})* "."? _ ReminderText? {
	return {name: "keywords", keywords: [word, ...tail]}
}

Keyword = ("Elusive" / "Skirmish" / "Taunt" / "Poison" / "Deploy" / "Alpha" / "Omega" / "Assault " Integer / "Hazardous " Integer) {
	return text();
}

ReminderText = _ "(" [^)]+ ")" _ {
	return {name: "reminderText", keywords: [text()]}
}

Number = Integer
Integer = [0-9]+ {return parseInt(text())}

_ "whitespace" = [  ﻿\u202f]*

UnknownEffect = [$A-Z]i([^\n\r\u000b.“] / QuotedSection)* {
	return {name: 'unknown', text: text()}
}

QuotedSection = "“" [^”“]+ [“”]