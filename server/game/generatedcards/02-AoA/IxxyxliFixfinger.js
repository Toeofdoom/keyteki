const Card = require('../../Card.js');

class IxxyxliFixfinger extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Each other Martian creature gets +1 armor.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && card !== context.source && card.hasTrait('martian'),
            effect: ability.effects.modifyArmor({ amount: 1 })
        });
    }
}

IxxyxliFixfinger.id = 'ixxyxli-fixfinger';

module.exports = IxxyxliFixfinger;
