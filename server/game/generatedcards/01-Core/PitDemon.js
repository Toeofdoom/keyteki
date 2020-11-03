const Card = require('../../Card.js');

class PitDemon extends Card {
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

PitDemon.id = 'pit-demon';

module.exports = PitDemon;
