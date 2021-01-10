const Card = require('../../Card.js');

class Irestaff extends Card {
    //Action: Enrage a creature. Give that creature a +1 power counter.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.enrage(),
                    ability.actions.addPowerCounter({ amount: 1 })
                ])
            }
        });
    }
}

Irestaff.id = 'irestaff';

module.exports = Irestaff;
