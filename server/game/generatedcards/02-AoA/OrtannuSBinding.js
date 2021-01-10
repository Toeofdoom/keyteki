const Card = require('../../Card.js');

class OrtannusBinding extends Card {
    //Play: Deal 2D to a friendly creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.dealDamage({ amount: 2 })
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
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 2
            }
          ]
        }
      ]
    }
  }
]
*/

OrtannusBinding.id = 'ortannu-s-binding';

module.exports = OrtannusBinding;
