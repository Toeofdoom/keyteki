const Card = require('../../Card.js');

class PiranhaMonkeys extends Card {
    //Play/Reap: Deal 2D to each other creature.
    setupCardAbilities(ability) {
        this.play({
            reap: true,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card !== context.source),
                amount: 2
            }))
        });
    }
}

PiranhaMonkeys.id = 'piranha-monkeys';

module.exports = PiranhaMonkeys;
