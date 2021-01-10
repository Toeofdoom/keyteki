const Card = require('../../Card.js');

class PhloxemSpike extends Card {
    //Play: If there are no friendly creatures in play, destroy each creature not on a flank.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) =>
                context.game.creaturesInPlay.filter((card) => card.controller === context.player)
                    .length === 0,
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => !card.isOnFlank())
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "flank"
                }
              }
            ],
            "mode": "all"
          },
          "condition": {
            "name": "comparison",
            "operator": "===",
            "b": {
              "name": "constant",
              "amount": 0
            },
            "a": {
              "name": "cards",
              "type": "creature",
              "controller": "self"
            }
          }
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": "===",
        "b": {
          "name": "constant",
          "amount": 0
        },
        "a": {
          "name": "cards",
          "type": "creature",
          "controller": "self"
        }
      }
    }
  }
]
*/

PhloxemSpike.id = 'phloxem-spike';

module.exports = PhloxemSpike;
