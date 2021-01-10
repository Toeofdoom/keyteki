const Card = require('../../Card.js');

class SleepWithTheFishes extends Card {
    //Play: Destroy each exhausted creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.exhausted)
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
                "name": "exhausted"
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

SleepWithTheFishes.id = 'sleep-with-the-fishes';

module.exports = SleepWithTheFishes;
