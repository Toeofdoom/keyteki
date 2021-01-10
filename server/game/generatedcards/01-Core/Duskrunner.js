const Card = require('../../Card.js');

class Duskrunner extends Card {
    //This creature gains, “Reap: Steal 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.steal({ amount: 1 })
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
                "name": "steal",
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

Duskrunner.id = 'duskrunner';

module.exports = Duskrunner;
