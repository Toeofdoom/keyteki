const Card = require('../../Card.js');

class Sequis extends Card {
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

Sequis.id = 'sequis';

module.exports = Sequis;
