const Card = require('../../Card.js');

class SpecialDelivery extends Card {
    //Omni: Sacrifice $this. Deal 3D to a flank creature. If this damage destroys that creature, purge it.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    cardCondition: (card) => card.isOnFlank(),
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                },
                then: (preThen2Context) => ({
                    condition: (context) =>
                        context.preThenEvent.destroyEvent &&
                        context.preThenEvent.destroyEvent.resolved,
                    gameAction: ability.actions.purge({ target: preThen2Context.target })
                })
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "omni",
    "actions": {
      "default": [
        {
          "name": "sacrifice",
          "target": {
            "mode": "self"
          }
        }
      ],
      "then": {
        "targets": [
          {
            "type": "creature",
            "conditions": [
              {
                "name": "flank"
              }
            ],
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "dealDamage",
                "amount": 3
              }
            ]
          }
        ],
        "then": {
          "default": [
            {
              "name": "purge",
              "target": {
                "mode": "it"
              },
              "condition": {
                "name": "destroysTarget"
              },
              "then": true
            }
          ],
          "condition": {
            "name": "destroysTarget"
          }
        },
        "alwaysTriggers": true
      }
    }
  }
]
*/

SpecialDelivery.id = 'special-delivery';

module.exports = SpecialDelivery;
