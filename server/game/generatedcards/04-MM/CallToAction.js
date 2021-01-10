const Card = require('../../Card.js');

class CallToAction extends Card {
    //Play: Ready each friendly Knight creature.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.ready((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('knight')
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
          "name": "ready",
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

CallToAction.id = 'call-to-action';

module.exports = CallToAction;
