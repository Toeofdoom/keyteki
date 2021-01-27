const Card = require('../../Card.js');

class DirectorOfZYX extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //At the start of your turn, archive the top card of your deck.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reaction({
            when: {
                onBeginRound: (event, context) => context.player === this.game.activePlayer
            },
            gameAction: ability.actions.archive((context) => ({
                target: context.player.deck.slice(0, Math.min(context.player.deck.length, 1)),
                location: 'deck'
            }))
        });
    }
}

DirectorOfZYX.id = 'director-of-zyx';

module.exports = DirectorOfZYX;
