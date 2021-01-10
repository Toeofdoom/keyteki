const Card = require('../../Card.js');

class Hock extends Card {
    //Play: Destroy an artifact. If you do, gain 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'artifact',
                gameAction: ability.actions.destroy()
            },
            then: {
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "artifact",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "gainAmber",
            "amount": 1,
            "then": true
          }
        ]
      }
    }
  }
]
*/

Hock.id = 'hock';

module.exports = Hock;
