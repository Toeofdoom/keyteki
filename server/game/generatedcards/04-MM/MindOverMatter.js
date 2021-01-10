const Card = require('../../Card.js');

class MindOverMatter extends Card {
    //Play: Put each creature into its owner’s archives.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive((context) => ({
                target: context.game.creaturesInPlay
            }))
        });
    }
}

MindOverMatter.id = 'mind-over-matter';

module.exports = MindOverMatter;
