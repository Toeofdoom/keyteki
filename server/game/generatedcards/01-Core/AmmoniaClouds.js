const Card = require('../../Card.js');

class AmmoniaClouds extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay,
                amount: 3
            }))
        });
    }
}

AmmoniaClouds.id = 'ammonia-clouds';

module.exports = AmmoniaClouds;
