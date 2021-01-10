const Card = require('../../Card.js');

class HarbingerOfDoom extends Card {
    //Destroyed: Destroy each creature.
    //
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

HarbingerOfDoom.id = 'harbinger-of-doom';

module.exports = HarbingerOfDoom;
