const Card = require('../../Card.js');

class FertilityChant extends Card {
    //Play: Your opponent gains 2A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 2,
                target: context.player.opponent
            }))
        });
    }
}

FertilityChant.id = 'fertility-chant';

module.exports = FertilityChant;
