const Card = require('../../Card.js');

class Floomf extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Fight: Give a Beast creature two +1 power counters.
    setupCardAbilities(ability) {
        //Keywords: skirmish
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
