const Card = require('../../Card.js');

class Snarette extends Card {
    //At the end of your turn, capture 1A.
    //Action: Move each A from $this to the common supply.
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onRoundEnded: (event, context) => context.player === this.game.activePlayer
            },
            gameAction: ability.actions.capture({ amount: 1 })
        });
        this.action({
            gameAction: ability.actions.removeAmber((context) => ({
                target: context.source,
                all: true
            }))
        });
    }
}

Snarette.id = 'snarette';

module.exports = Snarette;
