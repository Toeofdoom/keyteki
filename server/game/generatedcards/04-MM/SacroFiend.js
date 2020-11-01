const Card = require('../../Card.js');

class SacroFiend extends Card {
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.steal(1)
        });
    }
}

SacroFiend.id = 'sacro-fiend';

module.exports = SacroFiend;
