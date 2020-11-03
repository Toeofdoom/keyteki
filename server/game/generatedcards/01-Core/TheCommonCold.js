const Card = require('../../Card.js');

class TheCommonCold extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay,
                    amount: 1
                })),
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => card.hasHouse('mars'))
                }))
            ]
        });
    }
}

TheCommonCold.id = 'the-common-cold';

module.exports = TheCommonCold;
