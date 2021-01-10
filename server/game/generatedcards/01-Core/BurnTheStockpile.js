const Card = require('../../Card.js');

class BurnTheStockpile extends Card {
    //Play: If your opponent has 7A or more, they lose 4A.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) => context.player.opponent.amber >= 7,
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 4,
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
          "name": "loseAmber",
          "amount": 4,
          "targetPlayer": "they",
          "condition": {
            "name": "comparison",
            "operator": ">=",
            "a": {
              "name": "amber",
              "player": "opponent"
            },
            "b": {
              "name": "constant",
              "amount": 7
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
          "amount": 7
        }
      }
    }
  }
]
*/

BurnTheStockpile.id = 'burn-the-stockpile';

module.exports = BurnTheStockpile;
