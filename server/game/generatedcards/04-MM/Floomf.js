const Card = require('../../Card.js');

class Floomf extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.fight({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('beast'),
                gameAction: ability.actions.addPowerCounter({ amount: 2 })
            }
        });
    }
}

Floomf.id = 'floomf';

module.exports = Floomf;
