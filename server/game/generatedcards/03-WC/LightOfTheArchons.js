const Card = require('../../Card.js');

class LightOfTheArchons extends Card {
    //This creature gets +1 power and +1 armor for each upgrade attached to it.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [ability.effects.modifyPower(1), ability.effects.modifyArmor(1)]
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
        "name": "modifyPower",
        "amount": 1,
        "multiplier": {
          "name": "cards",
          "type": "upgrade",
          "conditions": [
            {
              "name": "attached",
              "target": {
                "mode": "it"
              }
            }
          ]
        }
      },
      {
        "name": "modifyArmor",
        "amount": 1,
        "multiplier": {
          "name": "cards",
          "type": "upgrade",
          "conditions": [
            {
              "name": "attached",
              "target": {
                "mode": "it"
              }
            }
          ]
        }
      }
    ]
  }
]
*/

LightOfTheArchons.id = 'light-of-the-archons';

module.exports = LightOfTheArchons;
