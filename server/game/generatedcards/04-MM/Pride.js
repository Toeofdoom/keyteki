const Card = require('../../Card.js');

class Pride extends Card {
    //Reap: Ward each friendly Sin creature.
    //
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.ward((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('sin')
                )
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
          "name": "ward",
          "target": {
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "trait",
                "trait": "sin"
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

Pride.id = 'pride';

module.exports = Pride;
