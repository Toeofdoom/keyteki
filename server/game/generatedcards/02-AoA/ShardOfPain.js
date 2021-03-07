const Card = require('../../Card.js');

class ShardOfPain extends Card {
    //Action: Deal 1D to an enemy creature for each friendly Shard.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.dealDamage((context) => ({
                    amount:
                        1 *
                        context.game.cardsInPlay.filter(
                            (card) => card.controller === context.player && card.hasTrait('shard')
                        ).length
                }))
            }
        });
    }
}

ShardOfPain.id = 'shard-of-pain';

module.exports = ShardOfPain;
