const Card = require('../../Card.js');

class Lilithal extends Card {
    //Fight/Reap: Capture 1A.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

Lilithal.id = 'lilithal';

module.exports = Lilithal;
