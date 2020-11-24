const Card = require('../../Card.js');

class LycoFiend extends Card {
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

LycoFiend.id = 'lyco-fiend';

module.exports = LycoFiend;
