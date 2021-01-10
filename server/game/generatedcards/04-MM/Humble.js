const Card = require('../../Card.js');

class Humble extends Card {
    //Play: Exhaust a creature. If you do, move 3A from that creature to the common supply.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.exhaust()
            },
            then: (preThenContext) => ({
                gameAction: ability.actions.removeAmber({
                    target: preThenContext.target,
                    amount: 3
                })
            })
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
              "name": "exhaust"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "amount": 3,
            "target": {
              "mode": "it"
            },
            "name": "removeAmber",
            "then": true
          }
        ]
      }
    }
  }
]
*/

Humble.id = 'humble';

module.exports = Humble;
