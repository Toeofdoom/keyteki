const Card = require('../../Card.js');

class MotherNorthelle extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: Move 1A from a friendly creature to your pool.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    amount: 1,
                    recipient: context.player
                }))
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
        "name": "elusive"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "amount": 1,
              "name": "returnAmber",
              "recipient": "self"
            }
          ]
        }
      ]
    }
  }
]
*/

MotherNorthelle.id = 'mother-northelle';

module.exports = MotherNorthelle;
