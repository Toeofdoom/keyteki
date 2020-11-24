const Card = require('../../Card.js');

class Umbra extends Card {
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Umbra.id = 'umbra';

module.exports = Umbra;
