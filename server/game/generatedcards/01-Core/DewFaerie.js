const Card = require('../../Card.js');

class DewFaerie extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
        this.reap({
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

DewFaerie.id = 'dew-faerie';

module.exports = DewFaerie;
