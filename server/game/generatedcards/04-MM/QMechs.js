const Card = require('../../Card.js');

class QMechs extends Card {
    //Play: Draw a card.
    //Destroyed: Archive $this.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 1 })
        });
        this.destroyed({
            gameAction: ability.actions.archive((context) => ({
                target: context.source,
                location: 'hand'
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "draw",
          "amount": 1
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "archive",
          "target": {
            "mode": "self",
            "location": "hand",
            "controller": "self"
          }
        }
      ]
    }
  }
]
*/

QMechs.id = 'q-mechs';

module.exports = QMechs;
