const Card = require('../../Card.js');

class DarkQueenGloriana extends Card {
    //Enhance AA. (These icons have already been added to cards in your deck.)
    //Play: Return a friendly non-Untamed creature to your hand.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => !card.hasHouse('untamed'),
                gameAction: ability.actions.returnToHand()
            }
        });
    }
}

DarkQueenGloriana.id = 'dark-queen-gloriana';

module.exports = DarkQueenGloriana;
