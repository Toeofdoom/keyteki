const Card = require('../../Card.js');

class AwayTeam extends Card {
    //Destroyed: Put each upgrade on $this into its owner’s archives.
    //
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.archive((context) => ({
                target: context.game.creaturesInPlay
                    .flatMap((card) => card.upgrades || [])
                    .filter((card) => context.source.upgrades.includes(card))
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "archive",
          "target": {
            "type": "upgrade",
            "conditions": [
              {
                "name": "attached",
                "target": {
                  "mode": "self"
                }
              }
            ],
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

AwayTeam.id = 'away-team';

module.exports = AwayTeam;
