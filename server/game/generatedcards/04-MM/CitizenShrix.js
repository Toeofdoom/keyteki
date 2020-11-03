const Card = require('../../Card.js');

class CitizenShrix extends Card {
    setupCardAbilities(ability) {
        this.play({
            reap: true,
            gameAction: [ability.actions.exalt(), ability.actions.steal({ amount: 1 })]
        });
    }
}

CitizenShrix.id = 'citizen-shrix';

module.exports = CitizenShrix;
