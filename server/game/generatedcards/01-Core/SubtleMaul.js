const Card = require('../../Card.js');

class SubtleMaul extends Card {
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
    }
}

SubtleMaul.id = 'subtle-maul';

module.exports = SubtleMaul;
