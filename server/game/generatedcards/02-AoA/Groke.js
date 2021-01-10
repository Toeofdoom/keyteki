const Card = require('../../Card.js');

class Groke extends Card {
    //Fight: Your opponent loses 1A.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.loseAmber({ amount: 1 })
        });
    }
}

Groke.id = 'groke';

module.exports = Groke;
