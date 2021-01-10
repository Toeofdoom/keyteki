const Card = require('../../Card.js');

class StirringGrave extends Card {
    //Play: Archive a creature from your discard pile.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.archive({ location: 'discard' })
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
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "location": "discard",
          "actions": [
            {
              "name": "archive"
            }
          ]
        }
      ]
    }
  }
]
*/

StirringGrave.id = 'stirring-grave';

module.exports = StirringGrave;
