const Card = require('../../Card.js');

class LongfusedMines extends Card {
    //Omni: Sacrifice $this. Deal 3D to each enemy creature not on a flank.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.sacrifice((context) => ({
                    target: context.source
                })),
                ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller !== context.player && !card.isOnFlank()
                    ),
                    amount: 3
                }))
            ])
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "omni",
    "actions": {
      "default": [
        {
          "name": "sacrifice",
          "target": {
            "mode": "self"
          }
        },
        {
          "name": "dealDamage",
          "amount": 3,
          "target": {
            "type": "creature",
            "controller": "opponent",
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "flank"
                }
              }
            ],
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

LongfusedMines.id = 'longfused-mines';

module.exports = LongfusedMines;
