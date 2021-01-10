const Card = require('../../Card.js');

class TheFittest extends Card {
    //Play: Give each friendly creature a +1 power counter.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.addPowerCounter((context) => ({
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
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "addPowerCounter",
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

TheFittest.id = 'the-fittest';

module.exports = TheFittest;
