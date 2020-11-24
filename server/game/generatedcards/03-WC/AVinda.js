const Card = require('../../Card.js');

class AVinda extends Card {
    //Reap: Deal 1D to a creature. If this damage destroys that creature, your opponent discards a random card from their hand.
    setupCardAbilities(ability) {
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.discardAtRandom({
                    amount: 1,
                    location: 'hand'
                })
            }
        });
    }
}

AVinda.id = 'a-vinda';

module.exports = AVinda;
