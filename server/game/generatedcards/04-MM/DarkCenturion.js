const Card = require('../../Card.js');

class DarkCenturion extends Card {
    //Enhance PTPT.
    //Action: Move 1A from a creature to the common supply. If you do, ward that creature.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.removeAmber({ amount: 1 })
            },
            then: (preThenContext) => ({
                gameAction: ability.actions.ward({ target: preThenContext.target })
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "enhance"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "amount": 1,
              "name": "removeAmber"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "ward",
            "target": {
              "mode": "it"
            },
            "then": true
          }
        ]
      }
    }
  }
]
*/

DarkCenturion.id = 'dark-centurion';

module.exports = DarkCenturion;
