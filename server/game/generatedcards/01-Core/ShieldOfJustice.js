const Card = require('../../Card.js');

class ShieldOfJustice extends Card {
    //Play: For the remainder of the turn, each friendly creature cannot be dealt damage.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player
                ),
                effect: ability.effects.cardCannot('damage')
            }))
        });
    }
}

ShieldOfJustice.id = 'shield-of-justice';

module.exports = ShieldOfJustice;
