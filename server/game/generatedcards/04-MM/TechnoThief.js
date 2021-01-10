const Card = require('../../Card.js');

class TechnoThief extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        //Keywords: elusive
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

TechnoThief.id = 'techno-thief';

module.exports = TechnoThief;
