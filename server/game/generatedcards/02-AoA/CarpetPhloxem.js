const Card = require('../../Card.js');

class CarpetPhloxem extends Card {
    //Play: If there are no friendly creatures in play, deal 4D to each creature.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) =>
                context.game.creaturesInPlay.filter((card) => card.controller === context.player)
                    .length === 0,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay,
                amount: 4
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
          "name": "dealDamage",
          "amount": 4,
          "target": {
            "type": "creature",
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

CarpetPhloxem.id = 'carpet-phloxem';

module.exports = CarpetPhloxem;
