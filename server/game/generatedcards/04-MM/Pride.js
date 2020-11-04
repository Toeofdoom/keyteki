const Card = require('../../Card.js');

class Pride extends Card {
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.ward((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) => card.controller !== context.player && card.hasTrait('sin')
                )
            }))
        });
        /*[]*/
    }
}

Pride.id = 'pride';

module.exports = Pride;
