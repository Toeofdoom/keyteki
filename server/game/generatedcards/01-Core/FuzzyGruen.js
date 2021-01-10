const Card = require('../../Card.js');

class FuzzyGruen extends Card {
    //Play: Your opponent gains 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
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
          "name": "gainAmber",
          "amount": 1,
          "targetPlayer": "opponent"
        }
      ]
    }
  }
]
*/

FuzzyGruen.id = 'fuzzy-gruen';

module.exports = FuzzyGruen;
