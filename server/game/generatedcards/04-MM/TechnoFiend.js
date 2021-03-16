const Card = require('../../Card.js');

class TechnoFiend extends Card {
    //Reap: Discard a card from your hand. If you do, draw a card.
    //Destroyed: Steal 1A.
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
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

TechnoFiend.id = 'techno-fiend';

module.exports = TechnoFiend;