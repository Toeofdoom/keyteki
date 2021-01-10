const Card = require('../../Card.js');

class DarkWave extends Card {
    //Play: Deal 2D to each non-Mutant creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('mutant')),
                amount: 2
            }))
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
          "amount": 2,
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
        }
      ]
    }
  }
]
*/

DarkWave.id = 'dark-wave';

module.exports = DarkWave;
