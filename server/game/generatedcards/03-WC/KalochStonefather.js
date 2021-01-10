const Card = require('../../Card.js');

class KalochStonefather extends Card {
    //While $this is in the center of your battleline, each friendly creature gains skirmish.
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: (context) => context.source.isInCenter(),
            match: (card) => card.type === 'creature',
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
    "condition": {
      "name": "check",
      "card": {
        "mode": "self"
      },
      "condition": {
        "name": "center"
      }
    },
    "target": {
      "type": "creature",
      "controller": "self",
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

KalochStonefather.id = 'kaloch-stonefather';

module.exports = KalochStonefather;
