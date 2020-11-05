const Card = require('../../Card.js');

class Batdrone extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Batdrone.id = 'batdrone';

module.exports = Batdrone;
