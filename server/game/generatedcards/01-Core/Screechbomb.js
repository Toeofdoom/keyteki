const Card = require('../../Card.js');

class Screechbomb extends Card {
    //Omni: Sacrifice $this. Your opponent loses 2A.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sequential([
                ability.actions.sacrifice((context) => ({
                    target: context.source
                })),
                ability.actions.loseAmber({ amount: 2 })
            ])
        });
    }
}

Screechbomb.id = 'screechbomb';

module.exports = Screechbomb;
