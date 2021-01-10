const Card = require('../../Card.js');

class BarristerJoya extends Card {
    //Enemy creatures cannot reap.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.cardCannot('reap')
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "0": "a",
      "1": "l",
      "2": "l",
      "type": "creature",
      "controller": "opponent"
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

BarristerJoya.id = 'barrister-joya';

module.exports = BarristerJoya;
