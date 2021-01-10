const Card = require('../../Card.js');

class LibraryAccess extends Card {
    //Play: For the remainder of the turn, each time you play another card, draw a card. Purge $this.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.sequential([
                ability.actions.forRemainderOfTurn({
                    when: {
                        onCardPlayed: (event, context) =>
                            event.player === context.player && event.card !== context.source
                    },
                    gameAction: ability.actions.draw({ amount: 1 })
                }),
                ability.actions.purge((context) => ({
                    target: context.source
                }))
            ])
        });
    }
}

LibraryAccess.id = 'library-access';

module.exports = LibraryAccess;
