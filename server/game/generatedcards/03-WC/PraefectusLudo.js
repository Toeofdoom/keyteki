const Card = require('../../Card.js');

class PraefectusLudo extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card, context) => card.type == 'creature' && card !== context.source,
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.removeAmber({ all: true })
            })
        });
    }
}

PraefectusLudo.id = 'praefectus-ludo';

module.exports = PraefectusLudo;
