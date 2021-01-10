const Card = require('../../Card.js');

class SanitationEngineer extends Card {
    //Hazardous 1. (Before this creature is attacked, deal 1D to the attacking enemy.)
    //Reap: Discard a card from your hand.
    setupCardAbilities(ability) {
        //Keywords: hazardous 1
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            }
        });
    }
}

SanitationEngineer.id = 'sanitation-engineer';

module.exports = SanitationEngineer;
