const Card = require('../../Card.js');

class AutoEncoder extends Card {
    //After a card is discarded from your hand, archive the top card of your deck.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDiscarded: (event, context) =>
                    event.location === 'hand' && event.card.controller === context.player
            },
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}

AutoEncoder.id = 'auto-encoder';

module.exports = AutoEncoder;
