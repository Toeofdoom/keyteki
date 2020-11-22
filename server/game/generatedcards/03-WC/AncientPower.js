const Card = require('../../Card.js');

class AncientPower extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.ward((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && card.hasToken('amber')
                )
            }))
        });
    }
}

AncientPower.id = 'ancient-power';

module.exports = AncientPower;
