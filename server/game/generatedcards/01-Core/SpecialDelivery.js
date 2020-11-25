const Card = require('../../Card.js');

class SpecialDelivery extends Card {
    //Omni: Sacrifice $this. Deal 3D to a flank creature. If this damage destroys that creature, purge it.
    setupCardAbilities(ability) {
        this.omni({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.isOnFlank(),
                gameAction: ability.actions.dealDamage({ amount: 3 })
            },
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            })),
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                target: {
                    mode: 'trigger',
                    numCards: '',
                    gameAction: ability.actions.purge((context) => ({
                        target: context.event.card
                    }))
                }
            }
        });
    }
}

SpecialDelivery.id = 'special-delivery';

module.exports = SpecialDelivery;
