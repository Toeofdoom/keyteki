const Card = require('../../Card.js');

class CincinnatusRex extends Card {
    //If there are no enemy creatures, destroy $this.
    //Fight: You may exalt $this. If you do, ready each other friendly card.
    setupCardAbilities(ability) {
        /*{
          "name": "comparison",
          "operator": "===",
          "b": {
            "name": "constant",
            "amount": 0
          },
          "a": {
            "name": "cards",
            "type": "creature",
            "controller": "opponent",
            "conditions": []
          }
        }*/
        /*" "*/
        /*{
          "name": "destroy",
          "target": {
            "mode": "self"
          },
          "splash": null,
          "multiplier": null,
          "noPrevent": null,
          "optional": false,
          "condition": null
        }*/
        this.fight({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.ready((context) => ({
                    target: context.game.cardsInPlay.filter(
                        (card) => card.controller === context.player && card !== context.source
                    )
                }))
            }
        });
    }
}
/*
[
  {
    "name": "comparison",
    "operator": "===",
    "b": {
      "name": "constant",
      "amount": 0
    },
    "a": {
      "name": "cards",
      "type": "creature",
      "controller": "opponent"
    }
  },
  " ",
  {
    "name": "destroy",
    "target": {
      "mode": "self"
    }
  },
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "optional": true,
      "default": [
        {
          "name": "exalt",
          "target": {
            "mode": "self"
          },
          "optional": true
        }
      ],
      "then": {
        "default": [
          {
            "name": "ready",
            "target": {
              "controller": "self",
              "conditions": [
                {
                  "name": "other"
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

CincinnatusRex.id = 'cincinnatus-rex';

module.exports = CincinnatusRex;
