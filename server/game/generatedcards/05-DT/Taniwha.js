const Card = require('../../Card.js');

class Taniwha extends Card {
    //Fight/Reap: Destroy a friendly creature and gain 1A.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.destroy()
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ],
      "default": [
        {
          "name": "gainAmber",
          "amount": 1
        }
      ]
    }
  }
]
*/

Taniwha.id = 'taniwha';

module.exports = Taniwha;
