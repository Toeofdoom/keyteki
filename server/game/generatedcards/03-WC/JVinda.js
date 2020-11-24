const Card = require('../../Card.js');

class JVinda extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.steal({ amount: 1 })
            }
        });
    }
}

JVinda.id = 'j-vinda';

module.exports = JVinda;
