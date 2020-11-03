const Card = require('../../Card.js');

class UnlockedGateway extends Card {
    setupCardAbilities(ability) {
        //Keywords: Omega
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay
            }))
        });
        /*[]*/
    }
}

UnlockedGateway.id = 'unlocked-gateway';

module.exports = UnlockedGateway;
