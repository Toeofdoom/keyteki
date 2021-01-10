const Card = require('../../Card.js');

class AVinda extends Card {
    //Reap: Deal 1D to a creature. If this damage destroys that creature, your opponent discards a random card from their hand.
    setupCardAbilities(ability) {
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.discardAtRandom({ amount: 1 })
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 1
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "discardAtRandom",
            "amount": 1,
            "targetPlayer": "opponent",
            "condition": {
              "name": "destroysTarget"
            },
            "then": true
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

AVinda.id = 'a-vinda';

module.exports = AVinda;
