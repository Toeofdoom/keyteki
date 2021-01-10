const Card = require('../../Card.js');

class TheroCenturion extends Card {
    //Play/Fight: Capture 1A.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "extraTriggers": [
      "fight"
    ],
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": 1
        }
      ]
    }
  }
]
*/

TheroCenturion.id = 'thero-centurion';

module.exports = TheroCenturion;
