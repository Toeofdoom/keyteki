const Card = require('../../Card.js');

class MindOverMatter extends Card {
    //Play: Put each creature into its owner’s archives.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive((context) => ({
                target: context.game.creaturesInPlay
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
          "name": "archive",
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

MindOverMatter.id = 'mind-over-matter';

module.exports = MindOverMatter;
