const Card = require('../../Card.js');

class Pound extends Card {
    //Play: Deal 2D to a creature, with 1D splash.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({
                    amount: 2,
                    splash: 1
                })
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
              "amount": 2,
              "splash": 1
            }
          ]
        }
      ]
    }
  }
]
*/

Pound.id = 'pound';

module.exports = Pound;
