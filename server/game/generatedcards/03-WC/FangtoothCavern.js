const Card = require('../../Card.js');

class FangtoothCavern extends Card {
    //At the end of your turn, destroy the least powerful creature.
    //
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onRoundEnded: (event, context) => context.player === this.game.activePlayer
            },
            target: {
                mode: 'mostStat',
                cardType: 'creature',
                cardStat: (card) => -card.power,
                gameAction: ability.actions.destroy()
            }
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "onRoundEnded",
      "conditions": [
        {
          "name": "turn",
          "player": "self"
        }
      ]
    },
    "actions": {
      "targets": [
        {
          "type": "creature",
          "mode": "mostStat",
          "count": 1,
          "cardStat": {
            "name": "negative",
            "quantity": {
              "name": "power"
            }
          },
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

FangtoothCavern.id = 'fangtooth-cavern';

module.exports = FangtoothCavern;
