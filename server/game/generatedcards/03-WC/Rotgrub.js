const Card = require('../../Card.js');

class Rotgrub extends Card {
    //Play: Your opponent loses 1A.
    //Reap: Archive $this.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber({ amount: 1 })
        });
        this.reap({
            gameAction: ability.actions.archive((context) => ({
                target: context.source,
                location: 'hand'
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
          "amount": 1,
          "targetPlayer": "opponent"
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "default": [
        {
          "name": "archive",
          "target": {
            "mode": "self",
            "location": "hand",
            "controller": "self"
          }
        }
      ]
    }
  }
]
*/

Rotgrub.id = 'rotgrub';

module.exports = Rotgrub;
