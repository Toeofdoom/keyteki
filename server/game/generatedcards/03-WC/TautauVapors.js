const Card = require('../../Card.js');

class TautauVapors extends Card {
    //Play: Draw 2 cards. Archive a card.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.draw({ amount: 2 }),
            then: {
                alwaysTriggers: true,
                target: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.archive({ location: 'hand' })
                }
            }
        });
    }
}

TautauVapors.id = 'tautau-vapors';

module.exports = TautauVapors;
