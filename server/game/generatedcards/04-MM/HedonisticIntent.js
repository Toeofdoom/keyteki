const Card = require('../../Card.js');

class HedonisticIntent extends Card {
    //Play: Exalt each flank creature.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.isOnFlank()),
                amount: 1
            }))
        });
    }
}

HedonisticIntent.id = 'hedonistic-intent';

module.exports = HedonisticIntent;
