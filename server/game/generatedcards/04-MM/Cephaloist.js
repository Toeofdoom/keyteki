const Card = require('../../Card.js');

class Cephaloist extends Card {
    //While you have 4A or more, your A cannot be stolen.
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: (context) => context.player.amber >= 4,
            effect: ability.effects.playerCannot('steal')
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "condition": {
      "name": "comparison",
      "operator": ">=",
      "a": {
        "name": "amber",
        "player": "self"
      },
      "b": {
        "name": "constant",
        "amount": 4
      }
    },
    "targetPlayer": "self",
    "effects": [
      {
        "name": "playerCannot",
        "effect": "steal"
      }
    ]
  }
]
*/

Cephaloist.id = 'cephaloist';

module.exports = Cephaloist;
