const Card = require('../../Card.js');

class Curiosity extends Card {
    //Play: Destroy each Scientist creature.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasTrait('scientist'))
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
          "name": "destroy",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "trait",
                "trait": "scientist"
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

Curiosity.id = 'curiosity';

module.exports = Curiosity;
