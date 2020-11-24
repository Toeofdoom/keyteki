const Card = require('../../Card.js');

class AmberImp extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onReap: (event) => event.card.type === 'creature'
            },
            gameAction: ability.actions.stun()
        });
    }
}

AmberImp.id = 'æmber-imp';

module.exports = AmberImp;
