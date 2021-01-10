const Card = require('../../Card.js');

class Fandangle extends Card {
    //While you have 4A or more, your non-Untamed creatures enter play ready.
    setupCardAbilities(ability) {
        this.persistentEffect({
            location: 'any',
            condition: (context) => context.player.amber >= 4,
            match: (card) => card.type === 'creature' && !card.hasHouse('untamed'),
            effect: ability.effects.entersPlayReady()
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "condition": {
      "name": "comparison",
      "operator": ">=",
      "a": {
        "name": "amber",
        "player": "self"
      },
      "b": {
        "name": "constant",
        "amount": 4
      }
    },
    "target": {
      "0": "a",
      "1": "l",
      "2": "l",
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "not",
          "condition": {
            "name": "house",
            "house": "untamed"
          }
        }
      ]
    },
    "effects": [
      {
        "name": "entersPlayReady"
      }
    ]
  }
]
*/

Fandangle.id = 'fandangle';

module.exports = Fandangle;
