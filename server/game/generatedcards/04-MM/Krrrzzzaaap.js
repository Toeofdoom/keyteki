const Card = require('../../Card.js');

class Krrrzzzaaap extends Card {
    //Play: Destroy each non-Mutant creature. Gain 1 chain.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('mutant'))
                })),
                ability.actions.gainChains({ amount: 1 })
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
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "trait",
                  "trait": "mutant"
                }
              }
            ],
            "mode": "all"
          }
        },
        {
          "name": "gainChains",
          "amount": 1
        }
      ]
    }
  }
]
*/

Krrrzzzaaap.id = 'krrrzzzaaap';

module.exports = Krrrzzzaaap;
