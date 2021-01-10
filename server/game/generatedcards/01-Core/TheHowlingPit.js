const Card = require('../../Card.js');

class TheHowlingPit extends Card {
    //During their “draw cards” step, each player refills their hand to 1 additional card.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyHandSize(1)
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "controller": "any"
    },
    "effects": [
      {
        "name": "modifyHandSize",
        "amount": 1
      }
    ]
  }
]
*/

TheHowlingPit.id = 'the-howling-pit';

module.exports = TheHowlingPit;
