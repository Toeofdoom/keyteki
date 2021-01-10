const Card = require('../../Card.js');

class TheSpiritsWay extends Card {
    //Play: Destroy each creature with power 3 or higher.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.power >= 3)
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
                "name": "comparison",
                "operator": ">=",
                "a": {
                  "name": "power"
                },
                "b": {
                  "name": "constant",
                  "amount": 3
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

TheSpiritsWay.id = 'the-spirit-s-way';

module.exports = TheSpiritsWay;
