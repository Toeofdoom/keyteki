const Card = require('../../Card.js');

class AmberImp extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //After a creature reaps, stun it.
    //
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onReap: (event) => event.card.type === 'creature'
            },
            gameAction: ability.actions.stun((context) => ({
                target: context.event.card
            }))
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
    "name": "reaction",
    "trigger": {
      "trigger": "reap",
      "card": {
        "type": "creature"
      }
    },
    "actions": {
      "default": [
        {
          "name": "stun",
          "target": {
            "mode": "it"
          }
        }
      ]
    }
  }
]
*/

AmberImp.id = 'æmber-imp';

module.exports = AmberImp;
