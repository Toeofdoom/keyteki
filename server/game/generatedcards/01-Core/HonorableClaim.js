const Card = require('../../Card.js');

class HonorableClaim extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('knight')
                ),
                amount: 1
            }))
        });
    }
}

HonorableClaim.id = 'honorable-claim';

module.exports = HonorableClaim;
