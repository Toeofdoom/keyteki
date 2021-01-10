const Card = require('../../Card.js');

class PipPip extends Card {
    //After an enemy creature reaps, stun it.
    //
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.stun((context) => ({
                target: context.event.card
            }))
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "reap",
      "card": {
        "type": "creature",
        "controller": "opponent"
      }
    },
    "actions": {
      "default": [
        {
          "name": "stun",
          "target": {
            "mode": "it"
          }
        }
      ]
    }
  }
]
*/

PipPip.id = 'pip-pip';

module.exports = PipPip;
