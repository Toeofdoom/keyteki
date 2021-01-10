const Card = require('../../Card.js');

class Poltergeist extends Card {
    //Play: Use an artifact controlled by any player as if it were yours. Destroy that artifact.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'artifact',
                gameAction: ability.actions.sequential([
                    ability.actions.use(),
                    ability.actions.destroy()
                ])
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
          "type": "artifact",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "use"
            },
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

Poltergeist.id = 'poltergeist';

module.exports = Poltergeist;
