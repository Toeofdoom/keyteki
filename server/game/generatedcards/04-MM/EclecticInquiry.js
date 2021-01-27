const Card = require('../../Card.js');

class EclecticInquiry extends Card {
    //Play: Archive the top 2 cards of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive((context) => ({
                target: context.player.deck.slice(0, Math.min(context.player.deck.length, 2)),
                location: 'deck'
            }))
        });
    }
}

EclecticInquiry.id = 'eclectic-inquiry';

module.exports = EclecticInquiry;
