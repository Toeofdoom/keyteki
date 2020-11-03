const Card = require('../../Card.js');

class FuzzyGruen extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                target: context.player.opponent,
                amount: 1
            }))
        });
    }
}

FuzzyGruen.id = 'fuzzy-gruen';

module.exports = FuzzyGruen;
