const Card = require('../../Card.js');

class HaedrothsWall extends Card {
    //Each friendly flank creature gets +2 power.
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.isOnFlank(),
            effect: ability.effects.modifyPower(2)
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "flank"
        }
      ],
      "mode": "all"
    },
    "effects": [
      {
        "name": "modifyPower",
        "amount": 2
      }
    ]
  }
]
*/

HaedrothsWall.id = 'haedroth-s-wall';

module.exports = HaedrothsWall;
