const Card = require('../../Card.js');

class MarsFirst extends Card {
    //Play: Ready and use a friendly Mars creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => card.hasHouse('mars'),
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.use()
                ])
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "conditions": [
            {
              "name": "house",
              "house": "mars"
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
              ]
            }
          ]
        }
      ]
    }
  }
]
*/

MarsFirst.id = 'mars-first';

module.exports = MarsFirst;
