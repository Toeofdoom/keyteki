const Card = require('../../Card.js');

class CurseOfVanity extends Card {
    //Play: Exalt a friendly creature and an enemy creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.exalt()
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
          "0": {
            "type": "creature",
            "controller": "self",
            "mode": "exactly",
            "count": 1
          },
          "2": "and",
          "3": [
            " "
          ],
          "4": {
            "type": "creature",
            "controller": "opponent",
            "mode": "exactly",
            "count": 1
          },
          "actions": [
            {
              "name": "exalt"
            }
          ]
        }
      ]
    }
  }
]
*/

CurseOfVanity.id = 'curse-of-vanity';

module.exports = CurseOfVanity;
