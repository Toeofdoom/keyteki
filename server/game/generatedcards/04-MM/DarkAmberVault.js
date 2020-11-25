const Card = require('../../Card.js');

class DarkAmberVault extends Card {
    //After you play a Mutant creature, draw a card.
    //Each friendly Mutant creature gets +2 power.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player &&
                    event.card.type === 'creature' &&
                    event.card.hasTrait('mutant')
            },
            gameAction: ability.actions.draw({ amount: 1 })
        });
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.hasTrait('mutant'),
            effect: ability.effects.modifyPower(2)
        });
    }
}

DarkAmberVault.id = 'dark-æmber-vault';

module.exports = DarkAmberVault;
