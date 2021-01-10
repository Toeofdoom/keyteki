const Card = require('../../Card.js');

class BilgumAvalanche extends Card {
    //After you forge a key, deal 2D to each enemy creature.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onForgeKey: (event, context) => event.player === context.player
            },
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player
                ),
                amount: 2
            }))
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "forges",
      "eventPlayer": "self"
    },
    "actions": {
      "default": [
        {
          "name": "dealDamage",
          "amount": 2,
          "target": {
            "type": "creature",
            "controller": "opponent",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

BilgumAvalanche.id = 'bilgum-avalanche';

module.exports = BilgumAvalanche;
