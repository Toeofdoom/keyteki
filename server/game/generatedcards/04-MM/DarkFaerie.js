const Card = require('../../Card.js');

class DarkFaerie extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.fight({
            gameAction: ability.actions.gainAmber({ amount: 2 })
        });
    }
}

DarkFaerie.id = 'dark-faerie';

module.exports = DarkFaerie;
