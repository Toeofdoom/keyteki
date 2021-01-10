const Card = require('../../Card.js');

class Timetraveller extends Card {
    //Play: Draw 2 cards.
    //Action: Shuffle $this into your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 2 })
        });
        this.action({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.source
            }))
        });
    }
}

Timetraveller.id = 'timetraveller';

module.exports = Timetraveller;
