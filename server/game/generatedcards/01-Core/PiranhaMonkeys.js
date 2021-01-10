const Card = require('../../Card.js');

class PiranhaMonkeys extends Card {
    //Play/Reap: Deal 2D to each other creature.
    setupCardAbilities(ability) {
        this.play({
            reap: true,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card !== context.source),
                amount: 2
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "default": [
        {
          "name": "dealDamage",
          "amount": 2,
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "other"
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

PiranhaMonkeys.id = 'piranha-monkeys';

module.exports = PiranhaMonkeys;
