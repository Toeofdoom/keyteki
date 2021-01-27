const Card = require('../../Card.js');

class CrystalSurge extends Card {
    //Play: Exalt each Mutant creature.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasTrait('mutant')),
                amount: 1
            }))
        });
    }
}

CrystalSurge.id = 'crystal-surge';

module.exports = CrystalSurge;
