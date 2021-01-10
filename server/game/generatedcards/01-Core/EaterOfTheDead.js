const Card = require('../../Card.js');

class EaterOfTheDead extends Card {
    //Fight/Reap: Purge a creature from a discard pile. If you do, put a +1 power counter on $this.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'any',
                location: 'discard',
                gameAction: ability.actions.purge({ location: 'discard' })
            },
            then: {
                gameAction: ability.actions.addPowerCounter((context) => ({
                    target: context.source,
                    amount: 1
                }))
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "any",
          "mode": "exactly",
          "count": 1,
          "location": "discard",
          "actions": [
            {
              "name": "purge"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "addPowerCounter",
            "amount": 1,
            "target": {
              "mode": "self"
            },
            "then": true
          }
        ]
      }
    }
  }
]
*/

EaterOfTheDead.id = 'eater-of-the-dead';

module.exports = EaterOfTheDead;
