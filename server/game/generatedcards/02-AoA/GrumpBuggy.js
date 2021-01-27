const Card = require('../../Card.js');

class GrumpBuggy extends Card {
    //Your opponent’s keys cost +1A for each friendly creature with power 5 or higher.
    //Your keys cost +1A for each enemy creature with power 5 or higher.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(
                (player, context) =>
                    1 * context.player.creaturesInPlay.filter((card) => card.power >= 5).length
            )
        });
        this.persistentEffect({
            effect: ability.effects.modifyKeyCost(
                (player, context) =>
                    1 *
                    context.player.opponent.creaturesInPlay.filter((card) => card.power >= 5).length
            )
        });
    }
}

GrumpBuggy.id = 'grump-buggy';

module.exports = GrumpBuggy;
