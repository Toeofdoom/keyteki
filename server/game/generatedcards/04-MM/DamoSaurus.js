const Card = require('../../Card.js');

class DamoSaurus extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoSaurus.id = 'dæmo-saurus';

module.exports = DamoSaurus;
