const Card = require('../../Card.js');

class BabblingBibliophile extends Card {
    //Reap: Draw 2 cards.
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.draw({ amount: 2 })
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
          "name": "draw",
          "amount": 2
        }
      ]
    }
  }
]
*/

BabblingBibliophile.id = 'babbling-bibliophile';

module.exports = BabblingBibliophile;
