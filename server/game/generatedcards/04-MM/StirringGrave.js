const Card = require('../../Card.js');

class StirringGrave extends Card {
    //Play: Archive a creature from your discard pile.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.archive({ location: 'discard' })
            }
        });
    }
}

StirringGrave.id = 'stirring-grave';

module.exports = StirringGrave;
