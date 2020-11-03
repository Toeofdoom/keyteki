const Card = require('../../Card.js');

class Mooncurser extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish, Poison
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Mooncurser.id = 'mooncurser';

module.exports = Mooncurser;
