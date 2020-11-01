const Card = require('../../Card.js');

class DamoThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.destroyed({
            gameAction: ability.actions.steal(1)
        });
    }
}

DamoThief.id = 'dæmo-thief';

module.exports = DamoThief;
