const Card = require('../../Card.js');

class TechnoFiend extends Card {
    setupCardAbilities(ability) {
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
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

TechnoFiend.id = 'techno-fiend';

module.exports = TechnoFiend;
