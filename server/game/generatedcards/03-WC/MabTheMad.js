const Card = require('../../Card.js');

class MabTheMad extends Card {
    //Reap: Shuffle $this into your deck.
    //
    setupCardAbilities(ability) {
        this.reap({
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
    "trigger": "reap",
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

MabTheMad.id = 'mab-the-mad';

module.exports = MabTheMad;
