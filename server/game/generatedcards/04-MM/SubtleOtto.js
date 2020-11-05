const Card = require('../../Card.js');

class SubtleOtto extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
    }
}

SubtleOtto.id = 'subtle-otto';

module.exports = SubtleOtto;
