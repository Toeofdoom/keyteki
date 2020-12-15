const Card = require('../../Card.js');

class FuzzyGruen extends Card {
    //Play: Your opponent gains 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.player.opponent
            }))
        });
    }
}

FuzzyGruen.id = 'fuzzy-gruen';

module.exports = FuzzyGruen;