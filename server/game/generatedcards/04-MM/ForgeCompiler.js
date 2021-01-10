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

ForgeCompiler.id = 'forge-compiler';

module.exports = ForgeCompiler;
