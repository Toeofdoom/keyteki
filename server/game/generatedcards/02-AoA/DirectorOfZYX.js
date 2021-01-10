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
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}

DirectorOfZYX.id = 'director-of-zyx';

module.exports = DirectorOfZYX;
