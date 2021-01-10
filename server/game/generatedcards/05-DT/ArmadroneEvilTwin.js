const Card = require('../../Card.js');

class ArmadroneEvilTwin extends Card {
    //Fight: Steal 2A.
    //This card is incomplete and subject to change.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.steal({ amount: 2 })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card is incomplete and subject to change."
          ]
        }*/
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
          "name": "steal",
          "amount": 2
        }
      ]
    }
  },
  {
    "name": "reminderText",
    "keywords": [
      "This card is incomplete and subject to change."
    ]
  }
]
*/

ArmadroneEvilTwin.id = 'armadrone-evil-twin';

module.exports = ArmadroneEvilTwin;
