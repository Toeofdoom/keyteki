const Card = require('../../Card.js');

class EclecticInquiry extends Card {
    //Play: Archive the top 2 cards of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}

EclecticInquiry.id = 'eclectic-inquiry';

module.exports = EclecticInquiry;
