const Card = require('../../Card.js');

class Headhunter extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.gainAmber(1)
        });
    }
}

Headhunter.id = 'headhunter';

module.exports = Headhunter;
