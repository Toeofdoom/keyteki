const Card = require('../../Card.js');

class Envy extends Card {
    //Elusive.
    //Reap: If there are 2 or more friendly Sin creatures, capture all of your opponent’s A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            condition: (context) =>
                context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('sin')
                ).length === 2,
            gameAction: ability.actions.capture({ all: true })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "elusive"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": "all",
          "condition": {
            "name": "comparison",
            "operator": "===",
            "b": {
              "name": "constant",
              "amount": 2
            },
            "a": {
              "name": "cards",
              "type": "creature",
              "controller": "self",
              "conditions": [
                {
                  "name": "trait",
                  "trait": "sin"
                }
              ]
            }
          }
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": "===",
        "b": {
          "name": "constant",
          "amount": 2
        },
        "a": {
          "name": "cards",
          "type": "creature",
          "controller": "self",
          "conditions": [
            {
              "name": "trait",
              "trait": "sin"
            }
          ]
        }
      }
    }
  }
]
*/

Envy.id = 'envy';

module.exports = Envy;
