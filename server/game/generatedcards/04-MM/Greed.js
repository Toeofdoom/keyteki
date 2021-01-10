const Card = require('../../Card.js');

class Greed extends Card {
    //During your “draw cards” step, refill your hand to 1 additional card for each friendly Sin creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyHandSize(1)
        });
    }
}

Greed.id = 'greed';

module.exports = Greed;
