const Card = require('../../Card.js');

class JVinda extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: Deal 1D to a creature. If this damage destroys that creature, steal 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.steal({ amount: 1 })
            }
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
            "name": "steal",
            "amount": 1,
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

JVinda.id = 'j-vinda';

module.exports = JVinda;
