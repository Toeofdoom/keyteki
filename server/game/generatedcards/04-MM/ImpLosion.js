const Card = require('../../Card.js');

class ImpLosion extends Card {
    //Play: Destroy a friendly creature and an enemy creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: '',
                gameAction: ability.actions.destroy()
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
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

ImpLosion.id = 'imp-losion';

module.exports = ImpLosion;
