const Card = require('../../Card.js');

class LashOfBrokenDreams extends Card {
    //Action: Keys cost +3A during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.lastingEffect({
                targetController: 'any',
                effect: ability.effects.modifyKeyCost(3)
            })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "default": [
        {
          "name": "lastingEffect",
          "durationEffect": {
            "name": "persistentEffect",
            "effects": [
              {
                "name": "modifyKeyCost",
                "amount": 3
              }
            ]
          }
        }
      ]
    }
  }
]
*/

LashOfBrokenDreams.id = 'lash-of-broken-dreams';

module.exports = LashOfBrokenDreams;
