const Card = require('../../Card.js');

class PoisonWave extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay,
                amount: 2
            }))
        });
    }
}

PoisonWave.id = 'poison-wave';

module.exports = PoisonWave;
