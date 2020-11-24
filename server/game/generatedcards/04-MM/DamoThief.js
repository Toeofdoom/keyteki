const Card = require('../../Card.js');

class DamoThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoThief.id = 'dæmo-thief';

module.exports = DamoThief;
