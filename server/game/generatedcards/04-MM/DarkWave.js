const Card = require('../../Card.js');

class DarkWave extends Card {
    setupCardAbilities(ability) {
        this.play({
            cardCondition: (card) => !card.hasTrait('mutant'),
            gameAction: ability.actions.dealDamage((context) => ({
                target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('mutant')),
                amount: 2
            }))
        });
    }
}

DarkWave.id = 'dark-wave';

module.exports = DarkWave;
