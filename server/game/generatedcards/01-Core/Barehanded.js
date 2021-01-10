const Card = require('../../Card.js');

class Barehanded extends Card {
    //Play: Put each artifact on top of its owner’s deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.game.cardsInPlay.filter((card) => card.type === 'artifact')
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
          "name": "returnToDeck",
          "target": {
            "type": "artifact",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

Barehanded.id = 'barehanded';

module.exports = Barehanded;
