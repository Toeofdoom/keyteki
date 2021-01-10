const Card = require('../../Card.js');

class CausalLoop extends Card {
    //Play: Archive a card. Archive $this.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
            },
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

CausalLoop.id = 'causal-loop';

module.exports = CausalLoop;
