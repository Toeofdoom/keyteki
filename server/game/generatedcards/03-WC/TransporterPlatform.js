const Card = require('../../Card.js');

class TransporterPlatform extends Card {
    //Action: Return a friendly creature and each upgrade attached to it to their owners’ hands.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                mode: '',
                gameAction: ability.actions.returnToHand()
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
          "0": {
            "type": "creature",
            "controller": "self",
            "mode": "exactly",
            "count": 1
          },
          "2": "and",
          "3": [
            " "
          ],
          "4": {
            "type": "upgrade",
            "conditions": [
              {
                "name": "attached",
                "target": {
                  "mode": "it"
                }
              }
            ],
            "mode": "all"
          },
          "actions": [
            {
              "name": "returnToHand"
            }
          ]
        }
      ]
    }
  }
]
*/

TransporterPlatform.id = 'transporter-platform';

module.exports = TransporterPlatform;
