const Card = require('../../Card.js');

class AmberImp extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //After a creature reaps, stun it.
    //
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
