const Card = require('../../Card.js');

class SloppyLabwork extends Card {
    //Play: Archive a card. Discard a card from your hand.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
            },
            then: {
                alwaysTriggers: true,
                target: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.discard({ location: 'hand' })
                }
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
      ],
      "then": {
        "targets": [
          {
            "controller": "self",
            "mode": "exactly",
            "count": 1,
            "location": "hand",
            "actions": [
              {
                "name": "discard"
              }
            ]
          }
        ],
        "alwaysTriggers": true
      }
    }
  }
]
*/

SloppyLabwork.id = 'sloppy-labwork';

module.exports = SloppyLabwork;
