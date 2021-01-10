const Card = require('../../Card.js');

class NurseSoto extends Card {
    //Deploy. (This creature can enter play anywhere in your battleline.)
    //Play/Fight/Reap: Heal 3 damage from each of $this’s neighbors.
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.play({
            fight: true,
            reap: true,
            gameAction: ability.actions.heal((context) => ({
                target: context.game.creaturesInPlay.filter((card) =>
                    context.source.neighbors.includes(card)
                ),
                amount: 3
            }))
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
      "default": [
        {
          "name": "heal",
          "amount": 3,
          "target": {
            "mode": "all",
            "type": "creature",
            "conditions": [
              {
                "name": "neighboring"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

NurseSoto.id = 'nurse-soto';

module.exports = NurseSoto;
