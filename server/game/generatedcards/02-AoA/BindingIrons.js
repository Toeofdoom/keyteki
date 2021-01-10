const Card = require('../../Card.js');

class BindingIrons extends Card {
    //Play: Your opponent gains 3 chains.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainChains((context) => ({
                amount: 3,
                target: context.player.opponent
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
          "name": "gainChains",
          "amount": 3,
          "targetPlayer": "opponent"
        }
      ]
    }
  }
]
*/

BindingIrons.id = 'binding-irons';

module.exports = BindingIrons;
