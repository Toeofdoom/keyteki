const Card = require('../../Card.js');

class AmmoniaClouds extends Card {
    //Play: Deal 3<D> to each creature.
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
