const Card = require('../../Card.js');

class SloppyLabwork extends Card {
    //Play: Archive a card. Discard a card from your hand.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
            },
            then: {
                alwaysTriggers: true,
                target: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.discard({ location: 'hand' })
                }
            }
        });
    }
}

SloppyLabwork.id = 'sloppy-labwork';

module.exports = SloppyLabwork;
