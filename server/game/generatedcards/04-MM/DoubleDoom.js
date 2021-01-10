const Card = require('../../Card.js');

class DoubleDoom extends Card {
    //Play: Return an enemy creature to its owner’s hand. Your opponent discards a random card from their hand.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.returnToHand()
            },
            gameAction: ability.actions.discardAtRandom({ amount: 1 })
        });
    }
}

DoubleDoom.id = 'double-doom';

module.exports = DoubleDoom;
