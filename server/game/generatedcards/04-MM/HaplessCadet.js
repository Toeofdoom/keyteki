const Card = require('../../Card.js');

class HaplessCadet extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Destroyed: Your opponent loses 3A.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.destroyed({
            gameAction: ability.actions.loseAmber({ amount: 3 })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "taunt"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "loseAmber",
          "amount": 3,
          "targetPlayer": "opponent"
        }
      ]
    }
  }
]
*/

HaplessCadet.id = 'hapless-cadet';

module.exports = HaplessCadet;
