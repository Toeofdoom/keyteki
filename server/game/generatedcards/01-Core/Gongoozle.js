const Card = require('../../Card.js');

class Gongoozle extends Card {
    //Play: Deal 3D to a creature. If it is not destroyed, its owner discards a random card from their hand.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 3 })
            },
            then: (preThenContext) => ({
                alwaysTriggers: true,
                condition: (context) =>
                    !(
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved
                    ),
                gameAction: ability.actions.discardAtRandom({
                    amount: 1,
                    target: preThenContext.target.owner
                })
            })
        });
    }
}

Gongoozle.id = 'gongoozle';

module.exports = Gongoozle;
