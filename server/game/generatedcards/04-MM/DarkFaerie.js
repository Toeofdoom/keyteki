const Card = require('../../Card.js');

class DarkFaerie extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.fight({
            gameAction: ability.actions.gainAmber(2)
        });
    }
}

DarkFaerie.id = 'dark-faerie';

module.exports = DarkFaerie;
