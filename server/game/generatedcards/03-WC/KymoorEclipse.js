const Card = require('../../Card.js');

class KymoorEclipse extends Card {
    //Play: Shuffle each flank creature into its owner’s deck.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.isOnFlank())
            }))
        });
    }
}

KymoorEclipse.id = 'kymoor-eclipse';

module.exports = KymoorEclipse;
