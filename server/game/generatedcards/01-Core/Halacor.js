const Card = require('../../Card.js');

class Halacor extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.isOnFlank(),
            effect: ability.effects.addKeyword({
                skirmish: 1
            })
        });
    }
}

Halacor.id = 'halacor';

module.exports = Halacor;
