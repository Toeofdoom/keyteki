const Card = require('../../Card.js');

class DeepwoodDruid extends Card {
    //Deploy. (This creature can enter play anywhere in your battleline.)
    //Play/Reap: Fully heal a neighboring creature.
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.play({
            reap: true,
            target: {
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.heal({ fully: true })
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
      "reap"
    ],
    "actions": {
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
              "name": "heal",
              "fully": true
            }
          ]
        }
      ]
    }
  }
]
*/

DeepwoodDruid.id = 'deepwood-druid';

module.exports = DeepwoodDruid;
