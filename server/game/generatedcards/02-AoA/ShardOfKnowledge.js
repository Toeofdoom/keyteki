const Card = require('../../Card.js');

class ShardOfKnowledge extends Card {
    //Action: Draw a card for each friendly Shard.
    //
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.draw((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasTrait('shard')
                    ).length
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "default": [
        {
          "name": "draw",
          "amount": 1,
          "multiplier": {
            "name": "cards",
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "trait",
                "trait": "shard"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

ShardOfKnowledge.id = 'shard-of-knowledge';

module.exports = ShardOfKnowledge;
