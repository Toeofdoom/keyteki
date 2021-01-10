const Card = require('../../Card.js');

class QuestorJarta extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: You may exalt $this. If you do, gain 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "elusive"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "optional": true,
      "default": [
        {
          "name": "exalt",
          "target": {
            "mode": "self"
          },
          "optional": true
        }
      ],
      "then": {
        "default": [
          {
            "name": "gainAmber",
            "amount": 1,
            "then": true
          }
        ]
      }
    }
  }
]
*/

QuestorJarta.id = 'questor-jarta';

module.exports = QuestorJarta;
