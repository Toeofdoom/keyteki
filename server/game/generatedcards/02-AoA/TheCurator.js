const Card = require('../../Card.js');

class TheCurator extends Card {
    //Friendly artifacts enter play ready.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            location: 'any',
            match: (card) => card.type === 'artifact',
            effect: ability.effects.entersPlayReady()
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
      "type": "artifact",
      "controller": "self"
    },
    "effects": [
      {
        "name": "entersPlayReady"
      }
    ]
  }
]
*/

TheCurator.id = 'the-curator';

module.exports = TheCurator;
