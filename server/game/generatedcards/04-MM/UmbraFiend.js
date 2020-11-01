const Card = require('../../Card.js');

class UmbraFiend extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.destroyed({
            gameAction: ability.actions.steal(1)
        });
    }
}

UmbraFiend.id = 'umbra-fiend';

module.exports = UmbraFiend;
