const Card = require('../../Card.js');

class LibraryOfPolliasaurus extends Card {
    //Action: Move 1A from a friendly creature to your pool.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.returnAmber((context) => ({
                    amount: 1,
                    recipient: context.player
                }))
            }
        });
    }
}

LibraryOfPolliasaurus.id = 'library-of-polliasaurus';

module.exports = LibraryOfPolliasaurus;
