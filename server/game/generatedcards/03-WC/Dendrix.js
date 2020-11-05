const Card = require('../../Card.js');

class Dendrix extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
    }
}

Dendrix.id = 'dendrix';

module.exports = Dendrix;
