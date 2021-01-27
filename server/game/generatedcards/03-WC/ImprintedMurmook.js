const Card = require('../../Card.js');

class ImprintedMurmook extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Your keys cost –1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            effect: ability.effects.modifyKeyCost(() => -1)
        });
    }
}

ImprintedMurmook.id = 'imprinted-murmook';

module.exports = ImprintedMurmook;
