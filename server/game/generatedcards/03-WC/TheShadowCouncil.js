const Card = require('../../Card.js');

class TheShadowCouncil extends Card {
    //Elusive.
    //While $this is in the center of your battleline, it gains, “Action: Steal 2A.”
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            condition: (context) => context.source.isInCenter(),
            effect: ability.effects.gainAbility('action', {
                gameAction: ability.actions.steal({ amount: 2 })
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
        "name": "elusive"
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
          "trigger": "action",
          "actions": {
            "default": [
              {
                "name": "steal",
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

TheShadowCouncil.id = 'the-shadow-council';

module.exports = TheShadowCouncil;
