const Card = require('../../Card.js');

class Tolas extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onCardDestroyed: (event) => event.clone.type === 'creature'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

Tolas.id = 'tolas';

module.exports = Tolas;
