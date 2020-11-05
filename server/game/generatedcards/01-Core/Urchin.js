const Card = require('../../Card.js');

class Urchin extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
        this.play({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Urchin.id = 'urchin';

module.exports = Urchin;
