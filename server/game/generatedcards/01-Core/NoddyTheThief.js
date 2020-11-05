const Card = require('../../Card.js');

class NoddyTheThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
        this.action({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

NoddyTheThief.id = 'noddy-the-thief';

module.exports = NoddyTheThief;
