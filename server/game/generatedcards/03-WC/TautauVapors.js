const Card = require('../../Card.js');

class TautauVapors extends Card {
    //Play: Draw 2 cards. Archive a card.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 2 }),
            then: {
                alwaysTriggers: true,
                target: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.archive({ location: 'hand' })
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
      "default": [
        {
          "name": "draw",
          "amount": 2
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
                "name": "archive"
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

TautauVapors.id = 'tautau-vapors';

module.exports = TautauVapors;
