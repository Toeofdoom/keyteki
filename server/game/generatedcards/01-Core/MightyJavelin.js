const Card = require('../../Card.js');

class MightyJavelin extends Card {
    setupCardAbilities(ability) {
        this.omni({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 4 })
            },
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            }))
        });
    }
}

MightyJavelin.id = 'mighty-javelin';

module.exports = MightyJavelin;
