const Card = require('../../Card.js');

class RadiantTruth extends Card {
    //Play: Stun each enemy creature not on a flank.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.stun((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && !card.isOnFlank()
                )
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
            "controller": "opponent",
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "flank"
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

RadiantTruth.id = 'radiant-truth';

module.exports = RadiantTruth;
