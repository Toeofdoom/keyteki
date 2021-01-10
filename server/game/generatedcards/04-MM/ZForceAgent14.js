const Card = require('../../Card.js');

class ZForceAgent14 extends Card {
    //Fight: Gain 1A for each upgrade on $this.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.gainAmber((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay
                        .flatMap((card) => card.upgrades || [])
                        .filter((card) => context.source.upgrades.includes(card)).length
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 1,
          "multiplier": {
            "name": "cards",
            "type": "upgrade",
            "conditions": [
              {
                "name": "attached",
                "target": {
                  "mode": "self"
                }
              }
            ]
          }
        }
      ]
    }
  }
]
*/

ZForceAgent14.id = 'z-force-agent-14';

module.exports = ZForceAgent14;
