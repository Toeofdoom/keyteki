const Card = require('../../Card.js');

class RandomAccessArchives extends Card {
    //Play: Archive the top card of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive((context) => ({
                target: context.player.deck.slice(0, Math.min(context.player.deck.length, 1)),
                location: 'deck'
            }))
        });
    }
}

RandomAccessArchives.id = 'random-access-archives';

module.exports = RandomAccessArchives;
