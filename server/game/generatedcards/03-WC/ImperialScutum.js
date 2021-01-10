const Card = require('../../Card.js');

class ImperialScutum extends Card {
    //This creature gets +2 armor and gains, “Destroyed: Move each A on this creature to the common supply.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.modifyArmor(2),
                ability.effects.gainAbility('destroyed', {
                    gameAction: ability.actions.removeAmber((context) => ({
                        target: context.source,
                        all: true
                    }))
                })
            ]
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
        "name": "modifyArmor",
        "amount": 2
      },
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "destroyed",
          "actions": {
            "default": [
              {
                "amount": "all",
                "target": {
                  "mode": "this"
                },
                "name": "removeAmber"
              }
            ]
          }
        }
      }
    ]
  }
]
*/

ImperialScutum.id = 'imperial-scutum';

module.exports = ImperialScutum;
