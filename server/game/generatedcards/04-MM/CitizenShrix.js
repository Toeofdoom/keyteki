const Card = require('../../Card.js');

class CitizenShrix extends Card {
    //Play/Reap: Exalt $this. Steal 1A.
    setupCardAbilities(ability) {
        this.play({
            reap: true,
            gameAction: [
                ability.actions.exalt((context) => ({
                    target: context.source
                })),
                ability.actions.steal({ amount: 1 })
            ]
        });
    }
}

CitizenShrix.id = 'citizen-shrix';

module.exports = CitizenShrix;
