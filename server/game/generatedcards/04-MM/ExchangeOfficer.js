const Card = require('../../Card.js');

class ExchangeOfficer extends Card {
    //Play/Fight/Reap: Use a friendly Star Alliance card.
    //
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            target: {
                controller: 'self',
                cardCondition: (card) => card.hasHouse('staralliance'),
                gameAction: ability.actions.use()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "extraTriggers": [
      "fight",
      "reap"
    ],
    "actions": {
      "targets": [
        {
          "controller": "self",
          "conditions": [
            {
              "name": "house",
              "house": "staralliance"
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

ExchangeOfficer.id = 'exchange-officer';

module.exports = ExchangeOfficer;
