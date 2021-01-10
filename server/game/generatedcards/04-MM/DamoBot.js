const Card = require('../../Card.js');

class DamoBot extends Card {
    //Reap: Discard a card from your hand. If you do, draw a card.
    //Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
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
      "then": {
        "default": [
          {
            "name": "draw",
            "amount": 1,
            "then": true
          }
        ]
      }
    }
  },
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "steal",
          "amount": 1
        }
      ]
    }
  }
]
*/

DamoBot.id = 'dæmo-bot';

module.exports = DamoBot;
