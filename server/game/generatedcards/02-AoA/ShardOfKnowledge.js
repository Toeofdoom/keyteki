const Card = require('../../Card.js');

class ShardOfKnowledge extends Card {
    //Action: Draw a card for each friendly Shard.
    //
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.draw((context) => ({
                amount:
                    1 *
                    context.game.cardsInPlay.filter(
                        (card) => card.controller === context.player && card.hasTrait('shard')
                    ).length
            }))
        });
    }
}

ShardOfKnowledge.id = 'shard-of-knowledge';

module.exports = ShardOfKnowledge;
