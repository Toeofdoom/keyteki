const Card = require('../../Card.js');

class SanitationEngineer extends Card {
    //Hazardous 1. (Before this creature is attacked, deal 1D to the attacking enemy.)
    //Reap: Discard a card from your hand.
    setupCardAbilities(ability) {
        //Keywords: hazardous 1
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
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
        "name": "hazardous",
        "count": 1
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "hand",
          "actions": [
            {
              "name": "discard"
            }
          ]
        }
      ]
    }
  }
]
*/

SanitationEngineer.id = 'sanitation-engineer';

module.exports = SanitationEngineer;
