const Card = require('../../Card.js');

class CowardsEnd extends Card {
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

CowardsEnd.id = 'coward-s-end';

module.exports = CowardsEnd;
