const Card = require('../../Card.js');

class RandomAccessArchives extends Card {
    //Play: Archive the top card of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}

RandomAccessArchives.id = 'random-access-archives';

module.exports = RandomAccessArchives;
