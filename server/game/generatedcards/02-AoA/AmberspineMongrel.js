const Card = require('../../Card.js');

class AmberspineMongrel extends Card {
    //Hazardous 3. (Before this creature is attacked, deal 3D to the attacking enemy.)
    //After an enemy creature reaps, gain 1A.
    setupCardAbilities(ability) {
        //Keywords: hazardous 3
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
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
    "name": "reaction",
    "trigger": {
      "trigger": "reap",
      "card": {
        "type": "creature",
        "controller": "opponent"
      }
    },
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 1
        }
      ]
    }
  }
]
*/

AmberspineMongrel.id = 'æmberspine-mongrel';

module.exports = AmberspineMongrel;
