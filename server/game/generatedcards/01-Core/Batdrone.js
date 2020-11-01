const Card = require('../../Card.js');

class Batdrone extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.fight({
            gameAction: ability.actions.steal(1)
        });
    }
}

Batdrone.id = 'batdrone';

module.exports = Batdrone;
