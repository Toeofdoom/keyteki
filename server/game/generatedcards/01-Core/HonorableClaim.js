const Card = require('../../Card.js');

class HonorableClaim extends Card {
    //Play: Each friendly Knight creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.player.creaturesInPlay.filter((card) => card.hasTrait('knight')),
                amount: 1
            }))
        });
    }
}

HonorableClaim.id = 'honorable-claim';

module.exports = HonorableClaim;
