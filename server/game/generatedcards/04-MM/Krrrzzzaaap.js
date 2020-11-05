const Card = require('../../Card.js');

class Krrrzzzaaap extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('mutant'))
                })),
                ability.actions.gainChains({ amount: 1 })
            ]
        });
    }
}

Krrrzzzaaap.id = 'krrrzzzaaap';

module.exports = Krrrzzzaaap;
