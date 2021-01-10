const Card = require('../../Card.js');

class Tolas extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Each time a creature is destroyed, its opponent gains 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onCardDestroyed: (event) => event.clone.type === 'creature'
            },
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.event.clone.controller.opponent
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
      "trigger": "destroyed",
      "card": {
        "type": "creature"
      }
    },
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 1,
          "targetPlayer": "controllerOpponent"
        }
      ]
    }
  }
]
*/

Tolas.id = 'tolas';

module.exports = Tolas;
