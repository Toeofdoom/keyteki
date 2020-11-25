const Card = require('../../Card.js');

class TautauVapors extends Card {
    //Play: Draw 2 cards. Archive a card.
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive()
            },
            gameAction: ability.actions.draw({ amount: 2 })
        });
    }
}

TautauVapors.id = 'tautau-vapors';

module.exports = TautauVapors;
