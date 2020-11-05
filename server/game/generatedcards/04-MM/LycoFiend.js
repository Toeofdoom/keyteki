const Card = require('../../Card.js');

class LycoFiend extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

LycoFiend.id = 'lyco-fiend';

module.exports = LycoFiend;
