const Card = require('../../Card.js');

class LightsOut extends Card {
    //Play: Return 2 enemy creatures to their owner’s hand.
    setupCardAbilities(ability) {
        this.play({
            target: {
                numCards: '2',
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.returnToHand()
            }
        });
    }
}

LightsOut.id = 'lights-out';

module.exports = LightsOut;
