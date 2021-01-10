const Card = require('../../Card.js');

class GravidCycle extends Card {
    //Omega. (After you play this card, end this step.)
    //Play: Return a card from your discard pile to your hand.
    setupCardAbilities(ability) {
        //Keywords: omega
        this.play({
            target: {
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.returnToHand({ location: 'discard' })
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
        "name": "omega"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "discard",
          "actions": [
            {
              "name": "returnToHand"
            }
          ]
        }
      ]
    }
  }
]
*/

GravidCycle.id = 'gravid-cycle';

module.exports = GravidCycle;
