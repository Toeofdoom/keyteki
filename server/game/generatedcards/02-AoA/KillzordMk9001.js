const Card = require('../../Card.js');

class KillzordMk9001 extends Card {
    //This creature gets +2 armor and +2 power.
    //This creature gains skirmish and, “Fight: Gain 1 chain.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [ability.effects.modifyArmor(2), ability.effects.modifyPower(2)]
        });
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({
                    skirmish: 1
                }),
                ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.gainChains({ amount: 1 })
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
        "name": "modifyPower",
        "amount": 2
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "skirmish"
          }
        ]
      },
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "fight",
          "actions": {
            "default": [
              {
                "name": "gainChains",
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

KillzordMk9001.id = 'killzord-mk-9001';

module.exports = KillzordMk9001;
