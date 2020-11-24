const Card = require('../../Card.js');

class Teliga extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

Teliga.id = 'teliga';

module.exports = Teliga;
