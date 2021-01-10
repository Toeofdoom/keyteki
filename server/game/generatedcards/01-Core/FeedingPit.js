const Card = require('../../Card.js');

class FeedingPit extends Card {
    //Action: Discard a creature from your hand. If you do, gain 1<A>.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}

FeedingPit.id = 'feeding-pit';

module.exports = FeedingPit;
