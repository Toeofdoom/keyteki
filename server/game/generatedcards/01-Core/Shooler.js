const Card = require('../../Card.js');

class Shooler extends Card {
    //Play: If your opponent has 4A or more, steal 1A.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) => context.player.opponent.amber >= 4,
            gameAction: ability.actions.steal({ amount: 1 })
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
          "condition": {
            "name": "comparison",
            "operator": ">=",
            "a": {
              "name": "amber",
              "player": "opponent"
            },
            "b": {
              "name": "constant",
              "amount": 4
            }
          }
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": ">=",
        "a": {
          "name": "amber",
          "player": "opponent"
        },
        "b": {
          "name": "constant",
          "amount": 4
        }
      }
    }
  }
]
*/

Shooler.id = 'shooler';

module.exports = Shooler;
