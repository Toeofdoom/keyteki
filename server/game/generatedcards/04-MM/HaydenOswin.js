const Card = require('../../Card.js');

class HaydenOswin extends Card {
    //Reap: Gain 1A for each upgrade on $this.
    setupCardAbilities(ability) {
        this.reap({
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
    "trigger": "reap",
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

HaydenOswin.id = 'hayden-oswin';

module.exports = HaydenOswin;
