const Card = require('../../Card.js');

class HitAndRun extends Card {
    //Play: Deal 2D to a creature. Return a friendly creature to your hand.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    gameAction: ability.actions.returnToHand()
                }
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
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 2
            }
          ]
        }
      ],
      "then": {
        "targets": [
          {
            "type": "creature",
            "controller": "self",
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "returnToHand"
              }
            ]
          }
        ],
        "alwaysTriggers": true
      }
    }
  }
]
*/

HitAndRun.id = 'hit-and-run';

module.exports = HitAndRun;
