const Card = require('../../Card.js');

class TheCommonCold extends Card {
    //Play: Deal 1D to each creature. You may destroy all Mars creatures.
    setupCardAbilities(ability) {
        this.play({
            optional: true,
            gameAction: ability.actions.sequential([
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay,
                    amount: 1
                })),
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => card.hasHouse('mars'))
                }))
            ])
        });
    }
}

TheCommonCold.id = 'the-common-cold';

module.exports = TheCommonCold;
