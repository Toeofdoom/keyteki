const Card = require('../../Card.js');

class Batdrone extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Steal 1<A>.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Batdrone.id = 'batdrone';

module.exports = Batdrone;
