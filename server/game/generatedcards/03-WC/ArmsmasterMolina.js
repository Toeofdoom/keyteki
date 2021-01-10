const Card = require('../../Card.js');

class ArmsmasterMolina extends Card {
    //Hazardous 3. (Before this creature is attacked, deal 3D to the attacking enemy.)
    //Each of $this’s neighbors gains hazardous 3.
    setupCardAbilities(ability) {
        //Keywords: hazardous 3
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.addKeyword({
                hazardous: 3
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "hazardous",
        "count": 3
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "mode": "all",
      "type": "creature",
      "conditions": [
        {
          "name": "neighboring"
        }
      ]
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "hazardous",
            "count": 3
          }
        ]
      }
    ]
  }
]
*/

ArmsmasterMolina.id = 'armsmaster-molina';

module.exports = ArmsmasterMolina;
