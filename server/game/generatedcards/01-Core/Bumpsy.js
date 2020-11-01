const Card = require('../../Card.js');

class Bumpsy extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber(1)
        });
    }
}

Bumpsy.id = 'bumpsy';

module.exports = Bumpsy;
