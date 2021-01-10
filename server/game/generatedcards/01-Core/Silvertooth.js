const Card = require('../../Card.js');

class Silvertooth extends Card {
    //$this enters play ready.
    setupCardAbilities(ability) {
        this.persistentEffect({
            location: 'any',
            effect: ability.effects.entersPlayReady()
        });
    }
}

Silvertooth.id = 'silvertooth';

module.exports = Silvertooth;
