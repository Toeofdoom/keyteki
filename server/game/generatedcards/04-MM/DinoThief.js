const Card = require('../../Card.js');

class DinoThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
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

DinoThief.id = 'dino-thief';

module.exports = DinoThief;
