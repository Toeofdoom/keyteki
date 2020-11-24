const Card = require('../../Card.js');

class Mooncurser extends Card {
    //Skirmish. Poison.
    //Fight: Steal 1<A>.
    setupCardAbilities(ability) {
        //Keywords: skirmish, poison
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Mooncurser.id = 'mooncurser';

module.exports = Mooncurser;
