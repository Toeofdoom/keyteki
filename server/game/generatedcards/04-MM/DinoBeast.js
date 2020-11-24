const Card = require('../../Card.js');

class DinoBeast extends Card {
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.play({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                }
            }
        });
    }
}

DinoBeast.id = 'dino-beast';

module.exports = DinoBeast;
