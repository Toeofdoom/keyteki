const Card = require('../../Card.js');

class Brammo extends Card {
    //Play: Deal 2D to each enemy flank creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && card.isOnFlank()
                ),
                amount: 2
            }))
        });
    }
}

Brammo.id = 'brammo';

module.exports = Brammo;
