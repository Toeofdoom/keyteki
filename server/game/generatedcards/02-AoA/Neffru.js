const Card = require('../../Card.js');

class Neffru extends Card {
    //Each time a creature is destroyed, its owner gains 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event) => event.clone.type === 'creature'
            },
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.event.clone.owner
            }))
        });
    }
}

Neffru.id = 'neffru';

module.exports = Neffru;
