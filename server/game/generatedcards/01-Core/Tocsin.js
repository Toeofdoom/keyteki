const Card = require('../../Card.js');

class Tocsin extends Card {
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
    }
}

Tocsin.id = 'tocsin';

module.exports = Tocsin;
