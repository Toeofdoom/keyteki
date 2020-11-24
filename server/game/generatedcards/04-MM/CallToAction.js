const Card = require('../../Card.js');

class CallToAction extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.ready((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller === context.player && card.hasTrait('knight')
                )
            }))
        });
    }
}

CallToAction.id = 'call-to-action';

module.exports = CallToAction;
