const Card = require('../../Card.js');

class CleansingWave extends Card {
    //Play: Heal 1 damage from each creature. Gain 1A for each creature healed this way.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.heal((context) => ({
                target: context.game.creaturesInPlay,
                amount: 1
            })),
            then: {
                alwaysTriggers: true,
                gameAction: ability.actions.gainAmber((context) => ({
                    amount:
                        1 *
                        context.preThenEvents.filter(
                            (event) => !event.cancelled && event.amount > 0
                        ).length
                }))
            }
        });
    }
}

CleansingWave.id = 'cleansing-wave';

module.exports = CleansingWave;
