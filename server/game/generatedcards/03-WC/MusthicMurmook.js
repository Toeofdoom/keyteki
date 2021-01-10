const Card = require('../../Card.js');

class MusthicMurmook extends Card {
    //Each player’s keys cost +1A.
    //Play: Deal 4D to a creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyKeyCost(1)
        });
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 4 })
            }
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "targetPlayer": "any",
    "effects": [
      {
        "name": "modifyKeyCost",
        "amount": 1
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 4
            }
          ]
        }
      ]
    }
  }
]
*/

MusthicMurmook.id = 'musthic-murmook';

module.exports = MusthicMurmook;
