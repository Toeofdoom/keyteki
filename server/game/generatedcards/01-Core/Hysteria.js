const Card = require('../../Card.js');

class Hysteria extends Card {
    //Play: Return each creature to its owner’s hand.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.game.creaturesInPlay
            }))
        });
    }
}

Hysteria.id = 'hysteria';

module.exports = Hysteria;
