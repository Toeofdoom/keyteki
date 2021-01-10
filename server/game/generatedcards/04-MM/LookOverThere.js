const Card = require('../../Card.js');

class LookOverThere extends Card {
    //Play: Deal 2D to a creature. If it is not destroyed, steal 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                alwaysTriggers: true,
                condition: (context) =>
                    !(
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved
                    ),
                gameAction: ability.actions.steal({ amount: 1 })
            }
        });
    }
}

LookOverThere.id = 'look-over-there';

module.exports = LookOverThere;
