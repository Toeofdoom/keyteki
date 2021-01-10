const Card = require('../../Card.js');

class RadPenny extends Card {
    //Play: Steal 1A.
    //Destroyed: Shuffle $this into your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal({ amount: 1 })
        });
        this.destroyed({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.source
            }))
        });
    }
}

RadPenny.id = 'rad-penny';

module.exports = RadPenny;
