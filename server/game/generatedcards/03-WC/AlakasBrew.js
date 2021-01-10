const Card = require('../../Card.js');

class AlakasBrew extends Card {
    //Play: Give a creature two +1 power counters.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.addPowerCounter({ amount: 2 })
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
              "name": "addPowerCounter",
              "amount": 2
            }
          ]
        }
      ]
    }
  }
]
*/

AlakasBrew.id = 'alaka-s-brew';

module.exports = AlakasBrew;
