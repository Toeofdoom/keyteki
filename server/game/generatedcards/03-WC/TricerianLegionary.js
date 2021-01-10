const Card = require('../../Card.js');

class TricerianLegionary extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Play: Ward a friendly creature.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.ward()
            }
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "taunt"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "ward"
            }
          ]
        }
      ]
    }
  }
]
*/

TricerianLegionary.id = 'tricerian-legionary';

module.exports = TricerianLegionary;
