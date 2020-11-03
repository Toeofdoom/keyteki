const Card = require('../../Card.js');

class CowardSEnd extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasToken('damage'))
                })),
                ability.actions.gainChains({ amount: 3 })
            ]
        });
    }
}

CowardSEnd.id = 'coward-s-end';

module.exports = CowardSEnd;
