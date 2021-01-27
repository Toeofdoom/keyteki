const Card = require('../../Card.js');

class Gluttony extends Card {
    //Play: Exalt $this once for each friendly Sin creature.
    //Reap: Move each A from friendly creatures to your pool.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount:
                    1 * context.player.creaturesInPlay.filter((card) => card.hasTrait('sin')).length
            }))
        });
        this.reap({
            gameAction: ability.actions.returnAmber((context) => ({
                target: context.player.creaturesInPlay,
                all: true,
                recipient: context.player
            }))
        });
    }
}

Gluttony.id = 'gluttony';

module.exports = Gluttony;
