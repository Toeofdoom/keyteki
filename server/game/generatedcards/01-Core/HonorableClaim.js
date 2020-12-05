const Card = require('../../Card.js');

class HonorableClaim extends Card {
    //Play: Each friendly Knight creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('knight')
                ),
                amount: 1,
                player: context.target.controller.opponent
            }))
        });
    }
}

HonorableClaim.id = 'honorable-claim';

module.exports = HonorableClaim;
