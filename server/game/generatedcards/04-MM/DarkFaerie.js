const Card = require('../../Card.js');

class DarkFaerie extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Gain 2A.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.gainAmber({ amount: 2 })
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
          "name": "gainAmber",
          "amount": 2
        }
      ]
    }
  }
]
*/

DarkFaerie.id = 'dark-faerie';

module.exports = DarkFaerie;
