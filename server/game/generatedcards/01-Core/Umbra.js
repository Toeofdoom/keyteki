const Card = require('../../Card.js');

class Umbra extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.fight({
            gameAction: ability.actions.steal(1)
        });
    }
}

Umbra.id = 'umbra';

module.exports = Umbra;
