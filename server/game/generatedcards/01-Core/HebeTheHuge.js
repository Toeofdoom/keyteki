const Card = require('../../Card.js');

class HebeTheHuge extends Card {
    //Play: Deal 2<D> to each other undamaged creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card !== context.source && !card.hasToken('damage')
                ),
                amount: 2
            }))
        });
    }
}

HebeTheHuge.id = 'hebe-the-huge';

module.exports = HebeTheHuge;
