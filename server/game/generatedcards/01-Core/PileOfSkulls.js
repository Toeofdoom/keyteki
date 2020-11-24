const Card = require('../../Card.js');

class PileOfSkulls extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event, context) =>
                    event.clone.controller !== context.player && event.clone.type === 'creature'
            },
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

PileOfSkulls.id = 'pile-of-skulls';

module.exports = PileOfSkulls;
