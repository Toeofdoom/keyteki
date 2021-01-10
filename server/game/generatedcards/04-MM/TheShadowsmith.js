const Card = require('../../Card.js');

class TheShadowsmith extends Card {
    //Each Mutant creature gains elusive.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature' && card.hasTrait('mutant'),
            effect: ability.effects.addKeyword({
                elusive: 1
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
            "name": "elusive"
          }
        ]
      }
    ]
  }
]
*/

TheShadowsmith.id = 'the-shadowsmith';

module.exports = TheShadowsmith;
