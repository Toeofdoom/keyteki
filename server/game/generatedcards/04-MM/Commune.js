const Card = require('../../Card.js');

class Commune extends Card {
    //Omega. (After you play this card, end this step.)
    //Play: Lose all of your A. Gain 4A.
    setupCardAbilities(ability) {
        //Keywords: omega
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.loseAmber((context) => ({
                    all: true,
                    target: context.player
                })),
                ability.actions.gainAmber({ amount: 4 })
            ])
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "omega"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "loseAmber",
          "amount": "all"
        },
        {
          "name": "gainAmber",
          "amount": 4
        }
      ]
    }
  }
]
*/

Commune.id = 'commune';

module.exports = Commune;
