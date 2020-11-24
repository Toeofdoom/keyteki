const Card = require('../../Card.js');

class SoulSnatcher extends Card {
    //Each time a creature is destroyed, its owner gains 1A.
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
