const Card = require('../../Card.js');

class Amberheart extends Card {
    //Action: Exalt, ward, and fully heal a friendly creature.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.exalt(),
                    ability.actions.ward(),
                    ability.actions.heal({ fully: true })
                ])
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
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "sequential",
              "actions": [
                {
                  "name": "exalt"
                },
                {
                  "name": "ward"
                },
                {
                  "name": "heal",
                  "fully": true
                }
              ]
            }
          ]
        }
      ]
    }
  }
]
*/

Amberheart.id = 'æmberheart';

module.exports = Amberheart;
