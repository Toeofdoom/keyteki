const Card = require('../../Card.js');

class LookOverThere extends Card {
    //Play: Deal 2D to a creature. If it is not destroyed, steal 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: {
                alwaysTriggers: true,
                condition: (context) =>
                    !(
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved
                    ),
                gameAction: ability.actions.steal({ amount: 1 })
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
        "default": [
          {
            "name": "steal",
            "amount": 1,
            "condition": {
              "name": "not",
              "condition": {
                "name": "destroysTarget"
              }
            }
          }
        ],
        "alwaysTriggers": true,
        "condition": {
          "name": "not",
          "condition": {
            "name": "destroysTarget"
          }
        }
      }
    }
  }
]
*/

LookOverThere.id = 'look-over-there';

module.exports = LookOverThere;
