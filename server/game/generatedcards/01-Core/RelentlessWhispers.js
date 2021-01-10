const Card = require('../../Card.js');

class RelentlessWhispers extends Card {
    //Play: Deal 2<D> to a creature. If this damage destroys that creature, steal 1<A>.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.steal({ amount: 1 })
            }
        });
    }
}

RelentlessWhispers.id = 'relentless-whispers';

module.exports = RelentlessWhispers;
