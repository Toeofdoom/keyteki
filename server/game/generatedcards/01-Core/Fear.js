const Card = require('../../Card.js');

class Fear extends Card {
    //Play: Return an enemy creature to its owner’s hand.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.returnToHand()
            }
        });
    }
}

Fear.id = 'fear';

module.exports = Fear;
