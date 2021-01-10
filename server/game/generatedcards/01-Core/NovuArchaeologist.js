const Card = require('../../Card.js');

class NovuArchaeologist extends Card {
    //Action: Archive a card from your discard pile.
    setupCardAbilities(ability) {
        this.action({
            target: {
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.archive({ location: 'discard' })
            }
        });
    }
}

NovuArchaeologist.id = 'novu-archaeologist';

module.exports = NovuArchaeologist;
