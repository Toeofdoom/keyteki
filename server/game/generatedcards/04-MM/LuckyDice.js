const Card = require('../../Card.js');

class LuckyDice extends Card {
    //Omni: Destroy $this. During your opponent’s next turn, friendly creatures cannot be dealt damage.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.source
                })),
                ability.actions.cardLastingEffect({ effect: ability.effects.cardCannot('damage') })
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
          "name": "destroy",
          "target": {
            "mode": "self"
          }
        },
        {
          "name": "lastingEffect",
          "durationEffect": {
            "name": "persistentEffect",
            "target": {
              "0": "a",
              "1": "l",
              "2": "l",
              "type": "creature",
              "controller": "self"
            },
            "effects": [
              {
                "name": "cardCannot",
                "effect": "damage"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

LuckyDice.id = 'lucky-dice';

module.exports = LuckyDice;
