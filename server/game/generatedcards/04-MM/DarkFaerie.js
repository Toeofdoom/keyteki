const Card = require('../../Card.js');

class DarkFaerie extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.fight({
            gameAction: ability.actions.gainAmber({ amount: 2 })
        });
    }
}

DarkFaerie.id = 'dark-faerie';

module.exports = DarkFaerie;
