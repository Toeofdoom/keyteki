const Card = require('../../Card.js');

class CowardsEnd extends Card {
    //Play: Destroy each undamaged creature. Gain 3 chains.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => !card.hasToken('damage'))
                })),
                ability.actions.gainChains({ amount: 3 })
            ])
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "damaged"
                }
              }
            ],
            "mode": "all"
          }
        },
        {
          "name": "gainChains",
          "amount": 3
        }
      ]
    }
  }
]
*/

CowardsEnd.id = 'coward-s-end';

module.exports = CowardsEnd;
