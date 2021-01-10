const Card = require('../../Card.js');

class LieutenantGorvenal extends Card {
    //After you fight with a creature, $this captures 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onFight: (event, context) =>
                    event.player === context.player && event.attacker.type === 'creature'
            },
            gameAction: ability.actions.capture((context) => ({
                target: context.source,
                amount: 1
            }))
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "fight",
      "card": {
        "type": "creature"
      },
      "eventPlayer": "self"
    },
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": 1,
          "target": {
            "mode": "self"
          }
        }
      ]
    }
  }
]
*/

LieutenantGorvenal.id = 'lieutenant-gorvenal';

module.exports = LieutenantGorvenal;
