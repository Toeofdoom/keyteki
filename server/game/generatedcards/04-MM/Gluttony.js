const Card = require('../../Card.js');

class Gluttony extends Card {
    //Play: Exalt $this once for each friendly Sin creature.
    //Reap: Move each A from friendly creatures to your pool.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            }))
        });
        this.reap({
            target: {
                mode: '',
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    all: true,
                    recipient: context.player
                }))
            }
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
          "name": "exalt",
          "target": {
            "mode": "self"
          },
          "multiplier": {
            "name": "cards",
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "trait",
                "trait": "sin"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "targets": [
        {
          "0": "a",
          "1": "l",
          "2": "l",
          "type": "creature",
          "controller": "self",
          "actions": [
            {
              "amount": "all",
              "name": "returnAmber",
              "recipient": "self"
            }
          ]
        }
      ]
    }
  }
]
*/

Gluttony.id = 'gluttony';

module.exports = Gluttony;
