const Card = require('../../Card.js');

class UmbraFiend extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
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
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "steal",
          "amount": 1
        }
      ]
    }
  }
]
*/

UmbraFiend.id = 'umbra-fiend';

module.exports = UmbraFiend;
