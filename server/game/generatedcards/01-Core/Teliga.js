const Card = require('../../Card.js');

class Teliga extends Card {
    //Each time your opponent plays a creature, gain 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "play",
      "card": {
        "type": "creature"
      },
      "eventPlayer": "opponent"
    },
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 1
        }
      ]
    }
  }
]
*/

Teliga.id = 'teliga';

module.exports = Teliga;
