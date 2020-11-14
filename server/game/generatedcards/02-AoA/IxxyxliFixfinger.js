const Card = require('../../Card.js');

class IxxyxliFixfinger extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type == 'creature' && card !== context.source && card.hasTrait('martian'),
            effect: ability.effects.modifyArmor({ amount: 1 })
        });
    }
}

IxxyxliFixfinger.id = 'ixxyxli-fixfinger';

module.exports = IxxyxliFixfinger;
