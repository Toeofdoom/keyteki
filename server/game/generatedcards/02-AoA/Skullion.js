const Card = require('../../Card.js');

class Skullion extends Card {
    //Play: Sacrifice a friendly creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sacrifice()
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
          "actions": [
            {
              "name": "sacrifice"
            }
          ]
        }
      ]
    }
  }
]
*/

Skullion.id = 'skullion';

module.exports = Skullion;
