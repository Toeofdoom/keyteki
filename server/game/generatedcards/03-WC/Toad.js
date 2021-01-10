const Card = require('../../Card.js');

class Toad extends Card {
    //$this cannot reap.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.cardCannot('reap')
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "mode": "self"
    },
    "effects": [
      {
        "name": "cardCannot",
        "effect": "reap"
      }
    ]
  }
]
*/

Toad.id = 'toad';

module.exports = Toad;
