const Card = require('../../Card.js');

class SoulSnatcher extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event) => event.clone.type === 'creature'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

SoulSnatcher.id = 'soul-snatcher';

module.exports = SoulSnatcher;
