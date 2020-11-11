const Card = require('../../Card.js');

class UnsuspectingPrey extends Card {
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
