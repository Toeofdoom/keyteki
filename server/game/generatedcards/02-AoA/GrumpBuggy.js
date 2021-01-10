const Card = require('../../Card.js');

class GrumpBuggy extends Card {
    //Your opponent’s keys cost +1A for each friendly creature with power 5 or higher.
    //Your keys cost +1A for each enemy creature with power 5 or higher.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(1)
        });
        this.persistentEffect({
            effect: ability.effects.modifyKeyCost(1)
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "multiplier": {
      "name": "cards",
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "comparison",
          "operator": ">=",
          "a": {
            "name": "power"
          },
          "b": {
            "name": "constant",
            "amount": 5
          }
        }
      ]
    },
    "targetPlayer": "opponent",
    "effects": [
      {
        "name": "modifyKeyCost",
        "amount": 1
      }
    ]
  },
  {
    "name": "persistentEffect",
    "multiplier": {
      "name": "cards",
      "type": "creature",
      "controller": "opponent",
      "conditions": [
        {
          "name": "comparison",
          "operator": ">=",
          "a": {
            "name": "power"
          },
          "b": {
            "name": "constant",
            "amount": 5
          }
        }
      ]
    },
    "targetPlayer": "self",
    "effects": [
      {
        "name": "modifyKeyCost",
        "amount": 1
      }
    ]
  }
]
*/

GrumpBuggy.id = 'grump-buggy';

module.exports = GrumpBuggy;
