const Card = require('../../Card.js');

class SpecialDelivery extends Card {
    //Omni: Sacrifice $this. Deal 3D to a flank creature. If this damage destroys that creature, purge it.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    cardCondition: (card) => card.isOnFlank(),
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                },
                then: (preThen2Context) => ({
                    condition: (context) =>
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved,
                    gameAction: ability.actions.purge({ target: preThen2Context.target })
                })
            }
        });
    }
}

SpecialDelivery.id = 'special-delivery';

module.exports = SpecialDelivery;
