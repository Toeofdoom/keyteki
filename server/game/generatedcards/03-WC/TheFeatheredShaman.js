const Card = require('../../Card.js');

class TheFeatheredShaman extends Card {
    //Elusive.
    //Fight/Reap: Ward each of $this’s neighbors.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.fight({
            reap: true,
            gameAction: ability.actions.ward((context) => ({
                target: context.game.creaturesInPlay.filter((card) =>
                    context.source.neighbors.includes(card)
                )
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
        "name": "elusive"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "fight",
    "extraTriggers": [
      "reap"
    ],
    "actions": {
      "default": [
        {
          "name": "ward",
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

TheFeatheredShaman.id = 'the-feathered-shaman';

module.exports = TheFeatheredShaman;
