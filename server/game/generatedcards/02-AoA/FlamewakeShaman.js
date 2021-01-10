const Card = require('../../Card.js');

class FlamewakeShaman extends Card {
    //Play: Deal 2D to a creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
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

FlamewakeShaman.id = 'flamewake-shaman';

module.exports = FlamewakeShaman;
