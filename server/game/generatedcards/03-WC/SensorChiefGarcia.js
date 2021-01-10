const Card = require('../../Card.js');

class SensorChiefGarcia extends Card {
    //Play/Fight/Reap: Keys cost +2A during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            gameAction: ability.actions.lastingEffect({
                targetController: 'any',
                effect: ability.effects.modifyKeyCost(2)
            })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "extraTriggers": [
      "fight",
      "reap"
    ],
    "actions": {
      "default": [
        {
          "name": "lastingEffect",
          "durationEffect": {
            "name": "persistentEffect",
            "effects": [
              {
                "name": "modifyKeyCost",
                "amount": 2
              }
            ]
          }
        }
      ]
    }
  }
]
*/

SensorChiefGarcia.id = 'sensor-chief-garcia';

module.exports = SensorChiefGarcia;
