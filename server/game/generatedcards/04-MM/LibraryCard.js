const Card = require('../../Card.js');

class LibraryCard extends Card {
    //Action: Purge $this. If you do, for the remainder of the turn, after you play a card, draw a card.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.purge((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.forRemainderOfTurn({
                    when: {
                        onCardPlayed: (event, context) => event.player === context.player
                    },
                    gameAction: ability.actions.draw({ amount: 1 })
                })
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
      "default": [
        {
          "name": "purge",
          "target": {
            "mode": "self"
          }
        }
      ],
      "then": {
        "default": [
          {
            "name": "forRemainderOfTurn",
            "durationEffect": {
              "name": "reaction",
              "trigger": {
                "trigger": "play",
                "card": {},
                "eventPlayer": "self"
              },
              "actions": {
                "default": [
                  {
                    "name": "draw",
                    "amount": 1
                  }
                ]
              }
            },
            "then": true
          }
        ]
      }
    }
  }
]
*/

LibraryCard.id = 'library-card';

module.exports = LibraryCard;
