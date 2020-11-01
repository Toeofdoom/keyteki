const Card = require('../../Card.js');

class Urchin extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.play({
            gameAction: ability.actions.steal(1)
        });
    }
}

Urchin.id = 'urchin';

module.exports = Urchin;
