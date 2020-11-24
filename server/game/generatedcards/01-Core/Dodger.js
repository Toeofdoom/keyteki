const Card = require('../../Card.js');

class Dodger extends Card {
    //Fight: Steal 1<A>.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Dodger.id = 'dodger';

module.exports = Dodger;
