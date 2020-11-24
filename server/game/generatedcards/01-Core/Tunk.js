const Card = require('../../Card.js');

class Tunk extends Card {
    //After you play another Mars creature, fully heal $this.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player &&
                    event.card.type === 'creature' &&
                    event.card !== context.source &&
                    event.card.hasHouse('mars')
            },
            gameAction: ability.actions.heal((context) => ({
                target: context.source,
                fully: true
            }))
        });
    }
}

Tunk.id = 'tunk';

module.exports = Tunk;
