const Card = require('../../Card.js');

class BackupCopy extends Card {
    //This creature gains, “Destroyed: Put this creature on top of your deck.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.returnToDeck((context) => ({
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
          "trigger": "destroyed",
          "actions": {
            "default": [
              {
                "name": "returnToDeck",
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

BackupCopy.id = 'backup-copy';

module.exports = BackupCopy;
