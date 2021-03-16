const Card = require('../../Card.js');

class TechnoKnight extends Card {
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
    }
}

TechnoKnight.id = 'techno-knight';

module.exports = TechnoKnight;