const Card = require('../../Card.js');

class Mooncurser extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null},{"name":"poison","count":null}]
        this.fight({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

Mooncurser.id = 'mooncurser';

module.exports = Mooncurser;
