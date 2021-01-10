const Card = require('../../Card.js');

class Dextre extends Card {
    //Play: Capture 1<A>.
    //Destroyed: Put $this on top of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture({ amount: 1 })
        });
        this.destroyed({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.source
            }))
        });
    }
}

Dextre.id = 'dextre';

module.exports = Dextre;
