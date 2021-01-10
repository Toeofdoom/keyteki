const Card = require('../../Card.js');

class Hysteria extends Card {
    //Play: Return each creature to its owner’s hand.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.game.creaturesInPlay
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
          "name": "returnToHand",
          "target": {
            "type": "creature",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

Hysteria.id = 'hysteria';

module.exports = Hysteria;
