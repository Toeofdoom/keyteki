const Card = require('../../Card.js');

class DocBookton extends Card {
    //Reap: Draw a card.
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.draw({ amount: 1 })
        });
    }
}

DocBookton.id = 'doc-bookton';

module.exports = DocBookton;
