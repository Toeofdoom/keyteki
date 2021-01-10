const Card = require('../../Card.js');

class MegaGroke extends Card {
    //Fight: Your opponent loses 1A.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.loseAmber({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "default": [
        {
          "name": "loseAmber",
          "amount": 1,
          "targetPlayer": "opponent"
        }
      ]
    }
  }
]
*/

MegaGroke.id = 'mega-groke';

module.exports = MegaGroke;
