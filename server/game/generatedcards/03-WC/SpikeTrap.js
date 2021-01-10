const Card = require('../../Card.js');

class SpikeTrap extends Card {
    //Omni: Destroy $this. If you do, deal 3D to each flank creature.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => card.isOnFlank()),
                    amount: 3
                }))
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "omni",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "mode": "self"
          }
        }
      ],
      "then": {
        "default": [
          {
            "name": "dealDamage",
            "amount": 3,
            "target": {
              "type": "creature",
              "conditions": [
                {
                  "name": "flank"
                }
              ],
              "mode": "all"
            },
            "then": true
          }
        ]
      }
    }
  }
]
*/

SpikeTrap.id = 'spike-trap';

module.exports = SpikeTrap;
