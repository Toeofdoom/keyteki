const Card = require('../../Card.js');

class TheGreyRider extends Card {
    //Deploy. (This creature can enter play anywhere in your battleline.)
    //Play/Fight/Reap: You may ready and fight with a neighboring creature.
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.play({
            fight: true,
            reap: true,
            target: {
                optional: true,
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
            }
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "deploy"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "extraTriggers": [
      "fight",
      "reap"
    ],
    "actions": {
      "optional": true,
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "neighboring"
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
                  "name": "fight"
                }
              ],
              "optional": true
            }
          ]
        }
      ]
    }
  }
]
*/

TheGreyRider.id = 'the-grey-rider';

module.exports = TheGreyRider;
