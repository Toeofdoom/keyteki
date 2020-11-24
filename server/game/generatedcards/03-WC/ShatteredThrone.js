const Card = require('../../Card.js');

class ShatteredThrone extends Card {
    //After a creature is used to fight, it captures 1A.
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
