const Card = require('../../Card.js');

class DetentionCoil extends Card {
    //This creature cannot fight.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.cardCannot('fight')
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
        "name": "cardCannot",
        "effect": "fight"
      }
    ]
  }
]
*/

DetentionCoil.id = 'detention-coil';

module.exports = DetentionCoil;
