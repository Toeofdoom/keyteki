const Card = require('../../Card.js');

class LycoSaurus extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Play: You may exalt $this. If you do, deal 3D to a creature.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.play({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                }
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
        "name": "skirmish"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
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
        "targets": [
          {
            "type": "creature",
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "dealDamage",
                "amount": 3,
                "then": true
              }
            ]
          }
        ]
      }
    }
  }
]
*/

LycoSaurus.id = 'lyco-saurus';

module.exports = LycoSaurus;
