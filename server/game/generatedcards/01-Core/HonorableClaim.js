const Card = require('../../Card.js');

class HonorableClaim extends Card {
    //Play: Each friendly Knight creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('knight')
                ),
                amount: 1
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
          "name": "capture",
          "amount": 1,
          "target": {
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "trait",
                "trait": "knight"
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

HonorableClaim.id = 'honorable-claim';

module.exports = HonorableClaim;
