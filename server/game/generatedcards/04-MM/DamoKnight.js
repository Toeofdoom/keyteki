const Card = require('../../Card.js');

class DamoKnight extends Card {
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoKnight.id = 'dæmo-knight';

module.exports = DamoKnight;
