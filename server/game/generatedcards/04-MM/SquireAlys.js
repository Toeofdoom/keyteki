const Card = require('../../Card.js');

class SquireAlys extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture(2)
        });
    }
}

SquireAlys.id = 'squire-alys';

module.exports = SquireAlys;
