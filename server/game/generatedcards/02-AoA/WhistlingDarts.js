const Card = require('../../Card.js');

class WhistlingDarts extends Card {
    //Play: Deal 1D to each enemy creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.player.opponent.creaturesInPlay,
                amount: 1
            }))
        });
    }
}

WhistlingDarts.id = 'whistling-darts';

module.exports = WhistlingDarts;
