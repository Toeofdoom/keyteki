const Card = require('../../Card.js');

class Ballcano extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay,
                    amount: 4
                })),
                ability.actions.gainChains({ amount: 2 })
            ]
        });
    }
}

Ballcano.id = 'ballcano';

module.exports = Ballcano;
