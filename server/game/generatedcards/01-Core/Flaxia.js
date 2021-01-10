const Card = require('../../Card.js');

class Flaxia extends Card {
    //Play: Gain 2A if you control more creatures than your opponent.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) =>
                context.game.creaturesInPlay.filter((card) => card.controller === context.player)
                    .length >
                context.game.creaturesInPlay.filter((card) => card.controller !== context.player)
                    .length,
            gameAction: ability.actions.gainAmber({ amount: 2 })
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
          "name": "gainAmber",
          "amount": 2,
          "condition": {
            "name": "comparison",
            "operator": ">",
            "a": {
              "name": "cards",
              "type": "creature",
              "controller": "self"
            },
            "b": {
              "name": "cards",
              "type": "creature",
              "controller": "opponent"
            }
          }
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": ">",
        "a": {
          "name": "cards",
          "type": "creature",
          "controller": "self"
        },
        "b": {
          "name": "cards",
          "type": "creature",
          "controller": "opponent"
        }
      }
    }
  }
]
*/

Flaxia.id = 'flaxia';

module.exports = Flaxia;
