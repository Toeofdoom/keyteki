const Card = require('../../Card.js');

class DewFaerie extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.reap({
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

DewFaerie.id = 'dew-faerie';

module.exports = DewFaerie;
