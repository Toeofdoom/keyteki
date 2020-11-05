const Card = require('../../Card.js');

class HarbingerOfDoom extends Card {
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay
            }))
        });
    }
}

HarbingerOfDoom.id = 'harbinger-of-doom';

module.exports = HarbingerOfDoom;
