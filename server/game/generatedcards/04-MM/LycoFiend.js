const Card = require('../../Card.js');

class LycoFiend extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.destroyed({
            gameAction: ability.actions.steal(1)
        });
    }
}

LycoFiend.id = 'lyco-fiend';

module.exports = LycoFiend;
