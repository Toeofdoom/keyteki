const Card = require('../../Card.js');

class Succubus extends Card {
    //During their “draw cards” step, your opponent refills their hand to 1 less card.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyHandSize(-1)
        });
    }
}

Succubus.id = 'succubus';

module.exports = Succubus;
