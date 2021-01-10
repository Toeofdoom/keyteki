const Card = require('../../Card.js');

class Daughter extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //During your “draw cards” step, refill your hand to 1 additional card.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyHandSize(1)
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "elusive"
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "controller": "self"
    },
    "effects": [
      {
        "name": "modifyHandSize",
        "amount": 1
      }
    ]
  }
]
*/

Daughter.id = 'daughter';

module.exports = Daughter;
