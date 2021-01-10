const Card = require('../../Card.js');

class NarpsBrew extends Card {
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

NarpsBrew.id = 'narp-s-brew';

module.exports = NarpsBrew;
