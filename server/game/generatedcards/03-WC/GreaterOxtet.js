const Card = require('../../Card.js');

class GreaterOxtet extends Card {
    //Taunt.
    //At the end of your “ready cards” step, purge a card from your hand. If you do, give $this two +1 power counters.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.reaction({
            when: {
                onCardsReadied: (event, context) => context.player === this.game.activePlayer
            },
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.purge({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.addPowerCounter((context) => ({
                    target: context.source,
                    amount: 2
                }))
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
        "name": "taunt"
      }
    ]
  },
  {
    "name": "reaction",
    "trigger": {
      "trigger": "onCardsReadied",
      "conditions": [
        {
          "name": "turn",
          "player": "self"
        }
      ]
    },
    "actions": {
      "targets": [
        {
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "hand",
          "actions": [
            {
              "name": "purge"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "addPowerCounter",
            "amount": 2,
            "target": {
              "mode": "self"
            },
            "then": true
          }
        ]
      }
    }
  }
]
*/

GreaterOxtet.id = 'greater-oxtet';

module.exports = GreaterOxtet;
