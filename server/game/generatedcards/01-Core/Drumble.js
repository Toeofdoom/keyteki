const Card = require('../../Card.js');

class Drumble extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Play: If your opponent has 7<A> or more, capture all of it.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.play({
            condition: (context) => context.player.opponent.amber >= 7,
            gameAction: ability.actions.capture({ all: true })
        });
    }
}

Drumble.id = 'drumble';

module.exports = Drumble;
