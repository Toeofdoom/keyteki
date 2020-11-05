const Card = require('../../Card.js');

class RadiantTruth extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.stun((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && !card.isOnFlank()
                )
            }))
        });
    }
}

RadiantTruth.id = 'radiant-truth';

module.exports = RadiantTruth;
