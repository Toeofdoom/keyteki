const Card = require('../../Card.js');

class CommanderChan extends Card {
    //Fight/Reap: Use another friendly creature.
    //
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card, context) => card !== context.source,
                gameAction: ability.actions.use()
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
              "name": "use"
            }
          ]
        }
      ]
    }
  }
]
*/

CommanderChan.id = 'commander-chan';

module.exports = CommanderChan;
