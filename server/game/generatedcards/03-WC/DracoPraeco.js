const Card = require('../../Card.js');

class DracoPraeco extends Card {
    //Reap: You may exalt $this. If you do, choose a house. Enrage each creature of that house.
    setupCardAbilities(ability) {
        this.reap({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                target: {
                    mode: 'house'
                },
                gameAction: ability.actions.enrage((context) => ({
                    target: context.game.creaturesInPlay.filter((card) =>
                        card.hasHouse(context.house)
                    )
                }))
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "optional": true,
      "default": [
        {
          "name": "exalt",
          "target": {
            "mode": "self"
          },
          "optional": true
        }
      ],
      "then": {
        "targets": [
          {
            "mode": "house"
          }
        ],
        "default": [
          {
            "name": "enrage",
            "target": {
              "type": "creature",
              "conditions": [
                {
                  "name": "chosenHouse"
                }
              ],
              "mode": "all"
            }
          }
        ]
      }
    }
  }
]
*/

DracoPraeco.id = 'draco-praeco';

module.exports = DracoPraeco;
