const Card = require('../../Card.js');

class GatewayToDis extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.destroy((context) => ({
                    target: context.game.creaturesInPlay
                })),
                ability.actions.gainChains({ amount: 3 })
            ]
        });
    }
}

GatewayToDis.id = 'gateway-to-dis';

module.exports = GatewayToDis;
