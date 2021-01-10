const Card = require('../../Card.js');

class FirstOfficerFrane extends Card {
    //Play/Fight/Reap: A friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture({ amount: 1 })
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
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "capture",
              "amount": 1
            }
          ]
        }
      ]
    }
  }
]
*/

FirstOfficerFrane.id = 'first-officer-frane';

module.exports = FirstOfficerFrane;
