const Card = require('../../Card.js');

class BordanTheRedeemed extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Action: Capture 2A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.capture({ amount: 2 })
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
    "trigger": "action",
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": 2
        }
      ]
    }
  }
]
*/

BordanTheRedeemed.id = 'bordan-the-redeemed';

module.exports = BordanTheRedeemed;
