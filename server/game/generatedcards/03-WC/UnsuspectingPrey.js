const Card = require('../../Card.js');

class UnsuspectingPrey extends Card {
    //Play: Deal 2D to up to 3 undamaged creatures.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'upTo',
                numCards: '3',
                cardType: 'creature',
                cardCondition: (card) => !card.hasToken('damage'),
                gameAction: ability.actions.dealDamage({ amount: 2 })
            }
        });
    }
}

UnsuspectingPrey.id = 'unsuspecting-prey';

module.exports = UnsuspectingPrey;
