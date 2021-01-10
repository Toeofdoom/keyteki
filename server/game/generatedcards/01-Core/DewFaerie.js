const Card = require('../../Card.js');

class DewFaerie extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: Gain 1<A>.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

DewFaerie.id = 'dew-faerie';

module.exports = DewFaerie;
