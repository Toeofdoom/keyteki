const Card = require('../../Card.js');

class ShardOfHate extends Card {
    //Action: Stun an enemy creature for each friendly Shard.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.stun()
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
              "name": "stun",
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

ShardOfHate.id = 'shard-of-hate';

module.exports = ShardOfHate;
