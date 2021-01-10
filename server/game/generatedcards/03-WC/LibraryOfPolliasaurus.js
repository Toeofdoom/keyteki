const Card = require('../../Card.js');

class LibraryOfPolliasaurus extends Card {
    //Action: Move 1A from a friendly creature to your pool.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    amount: 1,
                    recipient: context.player
                }))
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
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "amount": 1,
              "name": "returnAmber",
              "recipient": "self"
            }
          ]
        }
      ]
    }
  }
]
*/

LibraryOfPolliasaurus.id = 'library-of-polliasaurus';

module.exports = LibraryOfPolliasaurus;
