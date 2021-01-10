const Card = require('../../Card.js');

class RingOfInvisibility extends Card {
    //This creature gains elusive and skirmish.
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({
                    elusive: 1
                }),
                ability.effects.addKeyword({
                    skirmish: 1
                })
            ]
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
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "elusive"
          }
        ]
      },
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

RingOfInvisibility.id = 'ring-of-invisibility';

module.exports = RingOfInvisibility;
