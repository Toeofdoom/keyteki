const Card = require('../../Card.js');

class CincinnatusRex extends Card {
    //If there are no enemy creatures, destroy $this.
    //Fight: You may exalt $this. If you do, ready each other friendly card.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.terminalCondition({
                condition: (context) => context.player.opponent.creaturesInPlay.length === 0,
                gameAction: ability.actions.destroy((context) => ({
                    target: context.source
                }))
            })
        });
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
