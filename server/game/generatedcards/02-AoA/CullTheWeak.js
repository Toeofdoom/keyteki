const Card = require('../../Card.js');

class CullTheWeak extends Card {
    //Play: Destroy the least powerful enemy creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'mostStat',
                cardType: 'creature',
                controller: 'opponent',
                cardStat: (card) => -card.power,
                gameAction: ability.actions.destroy()
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
          "controller": "opponent",
          "mode": "mostStat",
          "count": 1,
          "cardStat": {
            "name": "negative",
            "quantity": {
              "name": "power"
            }
          },
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

CullTheWeak.id = 'cull-the-weak';

module.exports = CullTheWeak;
