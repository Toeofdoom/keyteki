const Card = require('../../Card.js');

class FinishingBlow extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.destroy()
            },
            then: {
                gameAction: ability.actions.steal({ amount: 1 })
            }
        });
    }
}

FinishingBlow.id = 'finishing-blow';

module.exports = FinishingBlow;
