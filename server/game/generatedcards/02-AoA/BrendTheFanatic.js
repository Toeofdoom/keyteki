const Card = require('../../Card.js');

class BrendTheFanatic extends Card {
    //Skirmish.
    //Play: Your opponent gains 1A.
    //Destroyed: Steal 3A.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.player.opponent
            }))
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 3 })
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
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 1,
          "targetPlayer": "opponent"
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "steal",
          "amount": 3
        }
      ]
    }
  }
]
*/

BrendTheFanatic.id = 'brend-the-fanatic';

module.exports = BrendTheFanatic;
