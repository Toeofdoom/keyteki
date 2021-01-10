const Card = require('../../Card.js');

class WarriorsRefrain extends Card {
    //Play: Stun each creature with power 3 or lower.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.stun((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.power <= 3)
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
          "name": "stun",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "comparison",
                "operator": "<=",
                "a": {
                  "name": "power"
                },
                "b": {
                  "name": "constant",
                  "amount": 3
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

WarriorsRefrain.id = 'warriors--refrain';

module.exports = WarriorsRefrain;
