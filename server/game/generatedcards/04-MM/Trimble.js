const Card = require('../../Card.js');

class Trimble extends Card {
    //Each Mutant creature gains skirmish.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature' && card.hasTrait('mutant'),
            effect: ability.effects.addKeyword({
                skirmish: 1
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "type": "creature",
      "conditions": [
        {
          "name": "trait",
          "trait": "mutant"
        }
      ],
      "mode": "all"
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "skirmish"
          }
        ]
      }
    ]
  }
]
*/

Trimble.id = 'trimble';

module.exports = Trimble;
