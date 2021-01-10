const Card = require('../../Card.js');

class GauntletOfCommand extends Card {
    //Action: Ready and fight with a friendly creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
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
              "name": "sequential",
              "actions": [
                {
                  "name": "ready"
                },
                {
                  "name": "fight"
                }
              ]
            }
          ]
        }
      ]
    }
  }
]
*/

GauntletOfCommand.id = 'gauntlet-of-command';

module.exports = GauntletOfCommand;
