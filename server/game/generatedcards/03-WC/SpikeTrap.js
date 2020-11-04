const Card = require('../../Card.js');

class SpikeTrap extends Card {
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.dealDamage((context) => ({
                    target: context.game.creaturesInPlay.filter((card) => card.isOnFlank()),
                    amount: 3
                }))
            }
        });
    }
}

SpikeTrap.id = 'spike-trap';

module.exports = SpikeTrap;
