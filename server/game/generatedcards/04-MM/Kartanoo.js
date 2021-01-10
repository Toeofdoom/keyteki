const Card = require('../../Card.js');

class Kartanoo extends Card {
    //Reap: Use an artifact controlled by any player as if it were yours.
    setupCardAbilities(ability) {
        this.reap({
            target: {
                cardType: 'artifact',
                gameAction: ability.actions.use()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "type": "artifact",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "use"
            }
          ]
        }
      ]
    }
  }
]
*/

Kartanoo.id = 'kartanoo';

module.exports = Kartanoo;
