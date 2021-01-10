const Card = require('../../Card.js');

class Stunner extends Card {
    //This creature gains, “Fight/Reap: You may stun a creature.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                target: {
                    optional: true,
                    cardType: 'creature',
                    gameAction: ability.actions.stun()
                }
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "fight",
          "extraTriggers": [
            "reap"
          ],
          "actions": {
            "optional": true,
            "targets": [
              {
                "type": "creature",
                "mode": "exactly",
                "count": 1,
                "actions": [
                  {
                    "name": "stun",
                    "optional": true
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  }
]
*/

Stunner.id = 'stunner';

module.exports = Stunner;
