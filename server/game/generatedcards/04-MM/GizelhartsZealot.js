const Card = require('../../Card.js');

class GizelhartsZealot extends Card {
    //$this enters play ready and enraged.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            location: 'any',
            effect: [ability.effects.entersPlayReady(), ability.effects.entersPlayEnraged()]
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
        "name": "entersPlayReady"
      },
      {
        "name": "entersPlayEnraged"
      }
    ]
  }
]
*/

GizelhartsZealot.id = 'gizelhart-s-zealot';

module.exports = GizelhartsZealot;
