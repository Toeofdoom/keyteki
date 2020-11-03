const Card = require('../../Card.js');

class Hock extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.destroy(), ability.actions.gainAmber({ amount: 1 })]
        });
    }
}

Hock.id = 'hock';

module.exports = Hock;
