const Card = require('../../Card.js');

class TaniwhaEvilTwin extends Card {
    //Fight/Reap: Put a creature from your discard pile on top of your deck.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.returnToDeck({ location: 'discard' })
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "discard",
          "actions": [
            {
              "name": "returnToDeck"
            }
          ]
        }
      ]
    }
  }
]
*/

TaniwhaEvilTwin.id = 'taniwha-evil-twin';

module.exports = TaniwhaEvilTwin;
