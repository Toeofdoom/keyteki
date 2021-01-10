const Card = require('../../Card.js');

class ForgeCompiler extends Card {
    //After your opponent forges a key, destroy $this and ward each friendly creature.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onForgeKey: (event, context) => event.player !== context.player
            },
            gameAction: ability.actions.sequential([
                ability.actions.destroy((context) => ({
                    target: context.source
                })),
                ability.actions.ward((context) => ({
                    target: context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player
                    )
                }))
            ])
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "forges",
      "eventPlayer": "opponent"
    },
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "mode": "self"
          }
        },
        {
          "name": "ward",
          "target": {
            "type": "creature",
            "controller": "self",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

ForgeCompiler.id = 'forge-compiler';

module.exports = ForgeCompiler;
