const Card = require('../../Card.js');

class SloppyLabwork extends Card {
    //Play: Archive a card. Discard a card from your hand.
    //
    setupCardAbilities(ability) {
        this.play({
            targets: {
                target1: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.archive()
                },
                target2: {
                    controller: 'self',
                    location: 'hand',
                    gameAction: ability.actions.discard()
                }
            }
        });
    }
}

SloppyLabwork.id = 'sloppy-labwork';

module.exports = SloppyLabwork;
