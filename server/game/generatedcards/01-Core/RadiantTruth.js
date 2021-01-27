const Card = require('../../Card.js');

class RadiantTruth extends Card {
    //Play: Stun each enemy creature not on a flank.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.stun((context) => ({
                target: context.player.opponent.creaturesInPlay.filter((card) => !card.isOnFlank())
            }))
        });
    }
}

RadiantTruth.id = 'radiant-truth';

module.exports = RadiantTruth;
