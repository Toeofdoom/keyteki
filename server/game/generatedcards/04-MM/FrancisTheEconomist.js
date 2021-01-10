const Card = require('../../Card.js');

class FrancisTheEconomist extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Each player gains 1A.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.sequential([
                ability.actions.gainAmber({ amount: 1 }),
                ability.actions.gainAmber((context) => ({
                    amount: 1,
                    target: context.player.opponent
                }))
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
          "amount": 1,
          "targetPlayer": "self"
        },
        {
          "name": "gainAmber",
          "amount": 1,
          "targetPlayer": "opponent"
        }
      ]
    }
  }
]
*/

FrancisTheEconomist.id = 'francis-the-economist';

module.exports = FrancisTheEconomist;
