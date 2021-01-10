const Card = require('../../Card.js');

class ShieldOfJustice extends Card {
    //Play: For the remainder of the turn, each friendly creature cannot be dealt damage.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.cardCannot('damage')
            }))
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
          "name": "forRemainderOfTurn",
          "durationEffect": {
            "name": "persistentEffect",
            "target": {
              "type": "creature",
              "controller": "self",
              "mode": "all"
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

ShieldOfJustice.id = 'shield-of-justice';

module.exports = ShieldOfJustice;
