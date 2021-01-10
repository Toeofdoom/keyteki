const Card = require('../../Card.js');

class CleansingWave extends Card {
    //Play: Heal 1 damage from each creature. Gain 1A for each creature healed this way.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.heal((context) => ({
                target: context.game.creaturesInPlay,
                amount: 1
            })),
            then: {
                alwaysTriggers: true,
                gameAction: ability.actions.gainAmber((context) => ({
                    amount:
                        1 *
                        context.preThenEvents.filter(
                            (event) => !event.cancelled && event.amount > 0
                        ).length
                }))
            }
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
          "name": "heal",
          "amount": 1,
          "target": {
            "type": "creature",
            "mode": "all"
          }
        }
      ],
      "then": {
        "default": [
          {
            "name": "gainAmber",
            "amount": 1,
            "multiplier": {
              "name": "healedThisWay",
              "card": {
                "type": "creature"
              }
            }
          }
        ],
        "alwaysTriggers": true
      }
    }
  }
]
*/

CleansingWave.id = 'cleansing-wave';

module.exports = CleansingWave;
