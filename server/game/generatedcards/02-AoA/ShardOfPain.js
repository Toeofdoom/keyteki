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
                        context.game.creaturesInPlay.filter(
                            (card) => card.controller === context.player && card.hasTrait('shard')
                        ).length
                }))
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "opponent",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
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
      ]
    }
  }
]
*/

ShardOfPain.id = 'shard-of-pain';

module.exports = ShardOfPain;
