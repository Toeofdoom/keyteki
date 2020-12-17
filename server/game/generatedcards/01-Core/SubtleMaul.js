const Card = require('../../Card.js');

class SubtleMaul extends Card {
    //Action: Your opponent discards a random card from their hand.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.discardAtRandom({ amount: 1 })
        });
    }
}

SubtleMaul.id = 'subtle-maul';

module.exports = SubtleMaul;
