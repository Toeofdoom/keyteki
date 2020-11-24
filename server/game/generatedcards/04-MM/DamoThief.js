const Card = require('../../Card.js');

class DamoThief extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoThief.id = 'dæmo-thief';

module.exports = DamoThief;
