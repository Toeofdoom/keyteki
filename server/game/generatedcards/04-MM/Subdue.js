const Card = require('../../Card.js');

class Subdue extends Card {
    //Play: Deal 1D to a creature and stun it.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.dealDamage({ amount: 1 }),
                    ability.actions.stun()
                ])
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
              "amount": 1
            },
            {
              "name": "stun"
            }
          ]
        }
      ]
    }
  }
]
*/

Subdue.id = 'subdue';

module.exports = Subdue;
