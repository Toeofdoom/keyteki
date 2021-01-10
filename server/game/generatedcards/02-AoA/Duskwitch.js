const Card = require('../../Card.js');

class Duskwitch extends Card {
    //Omega. (After you play this card, end this step.)
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Your creatures enter play ready.
    setupCardAbilities(ability) {
        //Keywords: omega
        //Keywords: elusive
        this.persistentEffect({
            location: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.entersPlayReady()
        });
    }
}

Duskwitch.id = 'duskwitch';

module.exports = Duskwitch;
