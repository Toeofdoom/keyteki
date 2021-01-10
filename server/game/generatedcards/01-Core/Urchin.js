const Card = require('../../Card.js');

class Urchin extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Play: Steal 1<A>.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.play({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Urchin.id = 'urchin';

module.exports = Urchin;
