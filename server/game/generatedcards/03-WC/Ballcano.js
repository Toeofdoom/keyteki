const Card = require('../../Card.js');

class Ballcano extends Card {
    //Play: Deal 4D to each creature. Gain 2 chains.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay,
                    amount: 4
                })),
                ability.actions.gainChains({ amount: 2 })
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
          "name": "dealDamage",
          "amount": 4,
          "target": {
            "type": "creature",
            "mode": "all"
          }
        },
        {
          "name": "gainChains",
          "amount": 2
        }
      ]
    }
  }
]
*/

Ballcano.id = 'ballcano';

module.exports = Ballcano;
