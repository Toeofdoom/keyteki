const Card = require('../../Card.js');

class PoisonWave extends Card {
    //Play: Deal 2<D> to each creature.
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
