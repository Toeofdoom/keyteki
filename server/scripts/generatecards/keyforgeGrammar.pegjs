Start = Line+
Line = ability:(BoldAbility / PersistentEffect) "\n"? 
{
	return ability;
}

BoldAbility = trigger:BoldTrigger ": " effect:TriggeredEffect {
	return {trigger:trigger, effect:effect} //`Bold Ability - Trigger: ${trigger}, Effect: ${effect}`;
}
BoldTrigger = SingleBoldTrigger
SingleBoldTrigger = "Play" / "Reap" / "Fight" / "Destroyed" / "Omni"
//House = "brobnar" / "dis" / "logos" / "mars" / "sanctum" / "shadows" / "untamed" / "saurian" / "star alliance"

TriggeredEffect = GainAmber / UnknownEffect
PersistentEffect = UnknownEffect

UnknownEffect = [^\n]+  
{
	return {name: 'unknown', text: text()} //`Unknown - ${text()}`;
}

GainAmber = "Gain " number: Number "<A>" {
	return {name: 'gainAmber', quantity: number} //`GainAmber - quantity ${number}`
}

LoseAmber = "Lose " number: Number "<A>" {
	return `GainAmber - quantity ${number}`
}

ForgeAKey = "Gain " number: Number "<A>" {
	return `GainAmber - quantity ${number}`
}

Number = [0-9]+
