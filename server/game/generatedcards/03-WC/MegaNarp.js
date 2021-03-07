const Card = require('../../Card.js');

class MegaNarp extends Card {
    //$this’s neighbors cannot reap.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.cardCannot('reap')
        });
    }
}

MegaNarp.id = 'mega-narp';

module.exports = MegaNarp;
