const Card = require('../../Card.js');

class CementShoes extends Card {
    //Play: Deal 2D to a creature. If this damage destroys that creature, raise the tide.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.raiseTide()
            }
        });
    }
}

CementShoes.id = 'cement-shoes';

module.exports = CementShoes;
