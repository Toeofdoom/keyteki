const Card = require('../../Card.js');

class SeekerOfTruth extends Card {
    //Fight: You may fight with a friendly non-Sanctum creature.
    //
    setupCardAbilities(ability) {
        this.fight({
            target: {
                optional: true,
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => !card.hasHouse('sanctum'),
                gameAction: ability.actions.fight()
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
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "conditions": [
            {
              "name": "not",
              "condition": {
                "name": "house",
                "house": "sanctum"
              }
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "fight",
              "optional": true
            }
          ]
        }
      ]
    }
  }
]
*/

SeekerOfTruth.id = 'seeker-of-truth';

module.exports = SeekerOfTruth;
