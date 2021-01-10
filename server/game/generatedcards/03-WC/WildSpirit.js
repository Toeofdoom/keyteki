const Card = require('../../Card.js');

class WildSpirit extends Card {
    //This creature gains, “Reap: Capture 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.capture({ amount: 1 })
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "reap",
          "actions": {
            "default": [
              {
                "name": "capture",
                "amount": 1
              }
            ]
          }
        }
      }
    ]
  }
]
*/

WildSpirit.id = 'wild-spirit';

module.exports = WildSpirit;
