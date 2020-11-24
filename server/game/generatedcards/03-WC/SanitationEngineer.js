const Card = require('../../Card.js');

class SanitationEngineer extends Card {
    //Hazardous 1. (Before this creature is attacked, deal 1D to the attacking enemy.)
    //Reap: Discard a card from your hand.
    setupCardAbilities(ability) {
        //Keywords: hazardous 1
        this.reap({
            gameAction: ability.actions.discard((context) => ({
                amount: 1,
                location: 'hand',
                target: context.player
            }))
        });
    }
}

SanitationEngineer.id = 'sanitation-engineer';

module.exports = SanitationEngineer;
