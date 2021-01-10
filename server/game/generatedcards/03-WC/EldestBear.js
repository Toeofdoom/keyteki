const Card = require('../../Card.js');

class EldestBear extends Card {
    //Assault 3.
    //While $this is in the center of your battleline, it gains, “Before Fight: Gain 2A.”
    setupCardAbilities(ability) {
        //Keywords: assault 3
        this.persistentEffect({
            targetController: 'any',
            condition: (context) => context.source.isInCenter(),
            effect: ability.effects.gainAbility('beforeFight', {
                gameAction: ability.actions.gainAmber({ amount: 2 })
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "assault",
        "count": 3
      }
    ]
  },
  {
    "name": "persistentEffect",
    "condition": {
      "name": "check",
      "card": {
        "mode": "self"
      },
      "condition": {
        "name": "center"
      }
    },
    "target": {
      "mode": "it"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "beforeFight",
          "actions": {
            "default": [
              {
                "name": "gainAmber",
                "amount": 2
              }
            ]
          }
        }
      }
    ]
  }
]
*/

EldestBear.id = 'eldest-bear';

module.exports = EldestBear;
