const Card = require('../../Card.js');

class ForceField extends Card {
    //This creature gains, “Reap: Ward this creature.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.ward((context) => ({
                    target: context.source
                }))
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
                "name": "ward",
                "target": {
                  "mode": "this"
                }
              }
            ]
          }
        }
      }
    ]
  }
]
*/

ForceField.id = 'force-field';

module.exports = ForceField;
