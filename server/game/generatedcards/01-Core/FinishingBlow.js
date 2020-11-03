const Card = require('../../Card.js');

class FinishingBlow extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.destroy(), ability.actions.steal({ amount: 1 })]
        });
    }
}

FinishingBlow.id = 'finishing-blow';

module.exports = FinishingBlow;
