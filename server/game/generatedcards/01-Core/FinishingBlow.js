const Card = require('../../Card.js');

class FinishingBlow extends Card {
    //Play: Destroy a damaged creature. If you do, steal 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.destroy()
            },
            then: {
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
          "conditions": [
            {
              "name": "damaged"
            }
          ],
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
            "name": "steal",
            "amount": 1,
            "then": true
          }
        ]
      }
    }
  }
]
*/

FinishingBlow.id = 'finishing-blow';

module.exports = FinishingBlow;
