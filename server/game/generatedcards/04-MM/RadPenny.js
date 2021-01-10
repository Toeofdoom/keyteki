const Card = require('../../Card.js');

class RadPenny extends Card {
    //Play: Steal 1A.
    //Destroyed: Shuffle $this into your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal({ amount: 1 })
        });
        this.destroyed({
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
          "name": "steal",
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

RadPenny.id = 'rad-penny';

module.exports = RadPenny;
