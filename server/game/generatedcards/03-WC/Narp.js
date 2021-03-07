const Card = require('../../Card.js');

class Narp extends Card {
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

Narp.id = 'narp';

module.exports = Narp;
