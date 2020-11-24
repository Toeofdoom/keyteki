const Card = require('../../Card.js');

class Headhunter extends Card {
    //Fight: Gain 1<A>.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

Headhunter.id = 'headhunter';

module.exports = Headhunter;
