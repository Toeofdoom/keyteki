const Card = require('../../Card.js');

class CreepingOblivion extends Card {
    //Play: Purge up to 2 cards from a discard pile.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'upTo',
                numCards: '2',
                controller: 'any',
                location: 'discard',
                gameAction: ability.actions.purge({ location: 'discard' })
            }
        });
    }
}

CreepingOblivion.id = 'creeping-oblivion';

module.exports = CreepingOblivion;
