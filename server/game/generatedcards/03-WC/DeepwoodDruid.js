const Card = require('../../Card.js');

class DeepwoodDruid extends Card {
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.play({
            reap: true,
            target: {
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.heal({ fully: true })
            }
        });
    }
}

DeepwoodDruid.id = 'deepwood-druid';

module.exports = DeepwoodDruid;
