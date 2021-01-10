const Card = require('../../Card.js');

class GormOfOmm extends Card {
    //Omni: Destroy $this. Destroy an artifact.
    //
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'artifact',
                    gameAction: ability.actions.destroy()
                }
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "omni",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "mode": "self"
          }
        }
      ],
      "then": {
        "targets": [
          {
            "type": "artifact",
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "destroy"
              }
            ]
          }
        ],
        "alwaysTriggers": true
      }
    }
  }
]
*/

GormOfOmm.id = 'gorm-of-omm';

module.exports = GormOfOmm;
