const Card = require('../../Card.js');

class DamoSaurus extends Card {
    //Play: You may exalt $this. If you do, deal 3D to a creature.
    //Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        this.play({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount: 1
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                }
            }
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoSaurus.id = 'dæmo-saurus';

module.exports = DamoSaurus;
