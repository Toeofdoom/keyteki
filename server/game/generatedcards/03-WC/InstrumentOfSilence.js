const Card = require('../../Card.js');

class InstrumentOfSilence extends Card {
    //This creature gains skirmish and, “Fight: Gain 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({
                    skirmish: 1
                }),
                ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.gainAmber({ amount: 1 })
                })
            ]
        });
    }
}

InstrumentOfSilence.id = 'instrument-of-silence';

module.exports = InstrumentOfSilence;
