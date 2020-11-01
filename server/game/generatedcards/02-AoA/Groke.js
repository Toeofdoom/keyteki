const Card = require('../../Card.js');

class Groke extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.loseAmber(1)
        });
    }
}

Groke.id = 'groke';

module.exports = Groke;
