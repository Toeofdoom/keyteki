const Card = require('../../Card.js');

class ZWaveEmitter extends Card {
    //At the start of your turn, ward this creature.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onBeginRound: (event, context) => context.player === this.game.activePlayer
            },
            gameAction: ability.actions.ward((context) => ({
                target: context.source.parent
            }))
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "onBeginRound",
      "conditions": [
        {
          "name": "turn",
          "player": "self"
        }
      ]
    },
    "actions": {
      "default": [
        {
          "name": "ward",
          "target": {
            "mode": "this"
          }
        }
      ]
    }
  }
]
*/

ZWaveEmitter.id = 'z-wave-emitter';

module.exports = ZWaveEmitter;
