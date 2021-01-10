const Card = require('../../Card.js');

class BoNithing extends Card {
    //Play: Steal 1A for each forged key your opponent has.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal((context) => ({
                amount: 1 * context.player.opponent.getForgedKeys()
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
          "name": "steal",
          "amount": 1,
          "multiplier": {
            "name": "keyCount",
            "player": "opponent"
          }
        }
      ]
    }
  }
]
*/

BoNithing.id = 'bo-nithing';

module.exports = BoNithing;
