const Card = require('../../Card.js');

class Galeatops extends Card {
    //$this only deals 4D when fighting.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.limitFightDamage({ amount: 4 })
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
        "name": "limitFightDamage",
        "amount": 4
      }
    ]
  }
]
*/

Galeatops.id = 'galeatops';

module.exports = Galeatops;
