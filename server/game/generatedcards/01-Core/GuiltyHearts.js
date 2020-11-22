const Card = require('../../Card.js');

class GuiltyHearts extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasToken('amber'))
            }))
        });
    }
}

GuiltyHearts.id = 'guilty-hearts';

module.exports = GuiltyHearts;
