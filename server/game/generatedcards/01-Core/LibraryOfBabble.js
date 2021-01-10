const Card = require('../../Card.js');

class LibraryOfBabble extends Card {
    //Action: Draw a card.
    //
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.draw({ amount: 1 })
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
          "name": "draw",
          "amount": 1
        }
      ]
    }
  }
]
*/

LibraryOfBabble.id = 'library-of-babble';

module.exports = LibraryOfBabble;
