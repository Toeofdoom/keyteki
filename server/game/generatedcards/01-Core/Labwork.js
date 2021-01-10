const Card = require('../../Card.js');

class Labwork extends Card {
    //Play: Archive a card.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
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
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "hand",
          "actions": [
            {
              "name": "archive"
            }
          ]
        }
      ]
    }
  }
]
*/

Labwork.id = 'labwork';

module.exports = Labwork;
