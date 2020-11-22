const Card = require('../../Card.js');

class SeekerNeedle extends Card {
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}

SeekerNeedle.id = 'seeker-needle';

module.exports = SeekerNeedle;
