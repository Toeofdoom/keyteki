const Card = require('../../Card.js');

class BadPenny extends Card {
    //Destroyed: Return $this to your hand.
    //
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.source
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "returnToHand",
          "target": {
            "mode": "self"
          }
        }
      ]
    }
  }
]
*/

BadPenny.id = 'bad-penny';

module.exports = BadPenny;
