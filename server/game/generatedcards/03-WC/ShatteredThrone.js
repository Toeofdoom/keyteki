const Card = require('../../Card.js');

class ShatteredThrone extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onFight: (event) => event.card.type === 'creature'
            },
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

ShatteredThrone.id = 'shattered-throne';

module.exports = ShatteredThrone;
