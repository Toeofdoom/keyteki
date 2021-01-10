const Card = require('../../Card.js');

class GatewayToDis extends Card {
    //Play: Destroy each creature. Gain 3 chains.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay
                })),
                ability.actions.gainChains({ amount: 3 })
            ])
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "mode": "all"
          }
        },
        {
          "name": "gainChains",
          "amount": 3
        }
      ]
    }
  }
]
*/

GatewayToDis.id = 'gateway-to-dis';

module.exports = GatewayToDis;
