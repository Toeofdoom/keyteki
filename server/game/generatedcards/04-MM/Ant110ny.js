const Card = require('../../Card.js');

class Ant110ny extends Card {
    //Play: Capture all of your opponent’s A.
    //At the end of your turn, move 1A from $this to your opponent’s pool.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture({ all: true })
        });
        this.interrupt({
            when: {
                onRoundEnded: (event, context) => context.player === this.game.activePlayer
            },
            gameAction: ability.actions.returnAmber((context) => ({
                target: context.source,
                amount: 1,
                recipient: context.player.opponent
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
          "name": "capture",
          "amount": "all"
        }
      ]
    }
  },
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
      "default": [
        {
          "amount": 1,
          "target": {
            "mode": "self"
          },
          "name": "returnAmber",
          "recipient": "opponent"
        }
      ]
    }
  }
]
*/

Ant110ny.id = 'ant1-10ny';

module.exports = Ant110ny;
