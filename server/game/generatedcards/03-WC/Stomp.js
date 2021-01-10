const Card = require('../../Card.js');

class Stomp extends Card {
    //Play: Deal 5D to a creature. If this damage destroys that creature, exalt a friendly creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 5 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    gameAction: ability.actions.exalt()
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
              "amount": 5
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
                "name": "exalt",
                "condition": {
                  "name": "destroysTarget"
                },
                "then": true
              }
            ]
          }
        ],
        "condition": {
          "name": "destroysTarget"
        }
      }
    }
  }
]
*/

Stomp.id = 'stomp';

module.exports = Stomp;
