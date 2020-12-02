const Card = require('../../Card.js');

class YxiloBolter extends Card {
    //Fight/Reap: Deal 2<D> to a creature. If this damage destroys that creature, purge it.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.purge((context) => ({
                    target: context.event.card
                }))
            }
        });
    }
}

YxiloBolter.id = 'yxilo-bolter';

module.exports = YxiloBolter;
