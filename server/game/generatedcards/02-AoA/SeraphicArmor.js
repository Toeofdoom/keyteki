const Card = require('../../Card.js');

class SeraphicArmor extends Card {
    //This creature gets +1 armor.
    //Play: Fully heal this creature.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.modifyArmor(1)
        });
        this.play({
            gameAction: ability.actions.heal((context) => ({
                target: context.source.parent,
                fully: true
            }))
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
        "amount": 1
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "heal",
          "fully": true,
          "target": {
            "mode": "this"
          }
        }
      ]
    }
  }
]
*/

SeraphicArmor.id = 'seraphic-armor';

module.exports = SeraphicArmor;
