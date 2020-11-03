const Card = require('../../Card.js');

class WhistlingDarts extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player
                ),
                amount: 1
            }))
        });
    }
}

WhistlingDarts.id = 'whistling-darts';

module.exports = WhistlingDarts;
