const Card = require('../../Card.js');

class FertilityChant extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                target: context.player.opponent,
                amount: 2
            }))
        });
    }
}

FertilityChant.id = 'fertility-chant';

module.exports = FertilityChant;
