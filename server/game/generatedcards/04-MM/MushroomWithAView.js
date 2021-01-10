const Card = require('../../Card.js');

class MushroomWithAView extends Card {
    //Omni: Heal 1 damage from each friendly creature.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.heal((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
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
    "trigger": "omni",
    "actions": {
      "default": [
        {
          "name": "heal",
          "amount": 1,
          "target": {
            "type": "creature",
            "controller": "self",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

MushroomWithAView.id = 'mushroom-with-a-view';

module.exports = MushroomWithAView;
