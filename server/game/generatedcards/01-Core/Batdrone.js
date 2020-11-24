const Card = require('../../Card.js');

class Batdrone extends Card {
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Batdrone.id = 'batdrone';

module.exports = Batdrone;
