const Card = require('../../Card.js');

class CincinnatusRex extends Card {
    //If there are no enemy creatures, destroy $this.
    //Fight: You may exalt $this. If you do, ready each other friendly card.
    setupCardAbilities(ability) {
        /*{
          "name": "terminalCondition",
          "condition": {
            "name": "comparison",
            "operator": "===",
            "b": {
              "name": "constant",
              "amount": 0
            },
            "a": {
              "name": "cards",
              "type": "creature",
              "controller": "opponent",
              "conditions": []
            }
          },
          "actions": [
            {
              "name": "destroy",
              "target": {
                "mode": "self"
              },
              "splash": null,
              "multiplier": null,
              "ignoreArmor": null,
              "optional": false,
              "condition": null
            }
          ]
        }*/
        this.fight({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount: 1
            })),
            then: {
                gameAction: ability.actions.ready((context) => ({
                    target: context.game.cardsInPlay.filter(
                        (card) => card.controller === context.player && card !== context.source
                    )
                }))
            }
        });
    }
}

CincinnatusRex.id = 'cincinnatus-rex';

module.exports = CincinnatusRex;
