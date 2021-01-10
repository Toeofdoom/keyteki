const Card = require('../../Card.js');

class LegatusRaptor extends Card {
    //Fight: You may exalt $this. If you do, ready and use another friendly creature.
    setupCardAbilities(ability) {
        this.fight({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    cardCondition: (card, context) => card !== context.source,
                    gameAction: ability.actions.sequential([
                        ability.actions.ready(),
                        ability.actions.use()
                    ])
                }
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
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
            "controller": "self",
            "conditions": [
              {
                "name": "other"
              }
            ],
            "mode": "exactly",
            "count": 1,
            "actions": [
              {
                "name": "sequential",
                "actions": [
                  {
                    "name": "ready"
                  },
                  {
                    "name": "use"
                  }
                ],
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

LegatusRaptor.id = 'legatus-raptor';

module.exports = LegatusRaptor;
