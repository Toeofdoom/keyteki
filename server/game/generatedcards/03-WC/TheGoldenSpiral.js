const Card = require('../../Card.js');

class TheGoldenSpiral extends Card {
    //Action: Exalt a friendly creature. Ready and use that creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.exalt(),
                    ability.actions.sequential([ability.actions.ready(), ability.actions.use()])
                ])
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "action",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "exalt"
            },
            {
              "name": "sequential",
              "actions": [
                {
                  "name": "ready"
                },
                {
                  "name": "use"
                }
              ]
            }
          ]
        }
      ]
    }
  }
]
*/

TheGoldenSpiral.id = 'the-golden-spiral';

module.exports = TheGoldenSpiral;
