const Card = require('../../Card.js');

class CausalLoop extends Card {
    //Play: Archive a card. Archive $this.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.archive({ location: 'hand' })
            },
            gameAction: ability.actions.archive((context) => ({
                target: context.source,
                location: 'hand'
            }))
        });
    }
}

CausalLoop.id = 'causal-loop';

module.exports = CausalLoop;
