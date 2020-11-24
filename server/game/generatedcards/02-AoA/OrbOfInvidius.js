const Card = require('../../Card.js');

class OrbOfInvidius extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onReap: (event) => event.card.type === 'creature'
            },
            gameAction: ability.actions.stun()
        });
    }
}

OrbOfInvidius.id = 'orb-of-invidius';

module.exports = OrbOfInvidius;
