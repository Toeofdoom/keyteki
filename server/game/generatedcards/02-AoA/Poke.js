const Card = require('../../Card.js');

class Poke extends Card {
    //Play: Deal 1D to an enemy creature. If this damage destroys that creature, draw a card.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: {
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.draw({ amount: 1 })
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
          "controller": "opponent",
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
            "name": "draw",
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

Poke.id = 'poke';

module.exports = Poke;
