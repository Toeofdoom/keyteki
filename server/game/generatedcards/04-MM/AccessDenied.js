const Card = require('../../Card.js');

class AccessDenied extends Card {
    //This creature cannot reap.
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.cardCannot('reap')
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
        "effect": "reap"
      }
    ]
  }
]
*/

AccessDenied.id = 'access-denied';

module.exports = AccessDenied;
