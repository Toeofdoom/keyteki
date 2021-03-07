const Card = require('../../Card.js');

class HardSimpsonEvilTwin extends Card {
    //Reap: If the tide is high, a damaged creature captures 1A from its own side.
    setupCardAbilities(ability) {
        this.reap({
            condition: (context) => context.player.isTideHigh(),
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.capture((context) => ({
                    amount: 1,
                    player: context.player.opponent
                }))
            }
        });
    }
}

HardSimpsonEvilTwin.id = 'hard-simpson-evil-twin';

module.exports = HardSimpsonEvilTwin;
