const Card = require('../../Card.js');

class Hologrammophone extends Card {
    //Action: Ward a creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.ward()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "ward"
            }
          ]
        }
      ]
    }
  }
]
*/

Hologrammophone.id = 'hologrammophone';

module.exports = Hologrammophone;
