const Card = require('../../Card.js');

class Timetraveller extends Card {
    //Play: Draw 2 cards.
    //Action: Shuffle $this into your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 2 })
        });
        this.action({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.source
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
          "amount": 2
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "default": [
        {
          "name": "returnToDeck",
          "target": {
            "mode": "self"
          }
        }
      ]
    }
  }
]
*/

Timetraveller.id = 'timetraveller';

module.exports = Timetraveller;
