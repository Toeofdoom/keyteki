const Card = require('../../Card.js');

class TechnoThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
        this.reap({
            gameAction: ability.actions.discard((context) => ({
                amount: 1,
                location: 'hand',
                target: context.player
            })),
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
    }
}

TechnoThief.id = 'techno-thief';

module.exports = TechnoThief;
