const Card = require('../../Card.js');

class IrradiatedAmber extends Card {
    //Play: If your opponent has 6<A> or more, deal 3<D> to each enemy creature.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) => context.player.opponent.amber >= 6,
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.player.opponent.creaturesInPlay,
                amount: 3
            }))
        });
    }
}

IrradiatedAmber.id = 'irradiated-æmber';

module.exports = IrradiatedAmber;
