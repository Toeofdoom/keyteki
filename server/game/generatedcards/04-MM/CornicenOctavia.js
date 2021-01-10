const Card = require('../../Card.js');

class CornicenOctavia extends Card {
    //Action: Capture 2A.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.capture({ amount: 2 })
        });
    }
}
/*
[
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

CornicenOctavia.id = 'cornicen-octavia';

module.exports = CornicenOctavia;
