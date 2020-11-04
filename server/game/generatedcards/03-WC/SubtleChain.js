const Card = require('../../Card.js');

class SubtleChain extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
        /*[]*/
    }
}

SubtleChain.id = 'subtle-chain';

module.exports = SubtleChain;
