const Card = require('../../Card.js');

class Soulkeeper extends Card {
    //This creature gains, “Destroyed: Destroy the most powerful enemy creature.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('destroyed', {
                target: {
                    mode: 'mostStat',
                    cardType: 'creature',
                    controller: 'opponent',
                    cardStat: (card) => card.power,
                    gameAction: ability.actions.destroy()
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
          "trigger": "destroyed",
          "actions": {
            "targets": [
              {
                "type": "creature",
                "controller": "opponent",
                "mode": "mostStat",
                "count": 1,
                "cardStat": {
                  "name": "power"
                },
                "actions": [
                  {
                    "name": "destroy"
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

Soulkeeper.id = 'soulkeeper';

module.exports = Soulkeeper;
