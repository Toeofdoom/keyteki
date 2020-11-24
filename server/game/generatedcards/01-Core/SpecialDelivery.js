const Card = require('../../Card.js');

class SpecialDelivery extends Card {
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
                target: {
                    mode: 'trigger',
                    numCards: '',
                    condition: (context) =>
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved,
                    gameAction: ability.actions.purge()
                }
            }
        });
    }
}

SpecialDelivery.id = 'special-delivery';

module.exports = SpecialDelivery;
