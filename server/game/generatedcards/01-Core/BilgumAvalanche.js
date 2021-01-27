const Card = require('../../Card.js');

class BilgumAvalanche extends Card {
    //After you forge a key, deal 2D to each enemy creature.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onForgeKey: (event, context) => event.player === context.player
            },
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.player.opponent.creaturesInPlay,
                amount: 2
            }))
        });
    }
}

BilgumAvalanche.id = 'bilgum-avalanche';

module.exports = BilgumAvalanche;
