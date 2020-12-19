const Card = require('../../Card.js');

class BullWark extends Card {
    //Assault 2. (Before this creature attacks, deal 2D to the attacked enemy.)
    //Each of $this’s neighbors gains assault 2.
    setupCardAbilities(ability) {
        //Keywords: assault 2
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.addKeyword({
                assault: 2
            })
        });
    }
}

BullWark.id = 'bull-wark';

module.exports = BullWark;
