const Card = require('../../Card.js');

class NogiSmartfist extends Card {
    //Fight: Draw 2 cards. Discard 2 random cards from your hand.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: [
                ability.actions.draw({ amount: 2 }),
                ability.actions.discardAtRandom((context) => ({
                    amount: 2,
                    target: context.player
                }))
            ]
        });
    }
}

NogiSmartfist.id = 'nogi-smartfist';

module.exports = NogiSmartfist;
