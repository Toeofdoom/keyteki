const Card = require('../../Card.js');

class KillzordMk9001 extends Card {
    //This creature gets +2 armor and +2 power.
    //This creature gains skirmish and, “Fight: Gain 1 chain.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [ability.effects.modifyArmor(() => 2), ability.effects.modifyPower(() => 2)]
        });
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({
                    skirmish: 1
                }),
                ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.gainChains({ amount: 1 })
                })
            ]
        });
    }
}

KillzordMk9001.id = 'killzord-mk-9001';

module.exports = KillzordMk9001;
