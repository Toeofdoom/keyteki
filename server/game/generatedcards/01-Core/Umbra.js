const Card = require('../../Card.js');

class Umbra extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Steal 1A.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
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
        "name": "skirmish"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "fight",
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

Umbra.id = 'umbra';

module.exports = Umbra;
