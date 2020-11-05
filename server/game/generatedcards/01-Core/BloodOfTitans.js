const Card = require('../../Card.js');

class BloodOfTitans extends Card {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [ability.actions.gainPower({ amount: 5 })]
        });
    }
}

BloodOfTitans.id = 'blood-of-titans';

module.exports = BloodOfTitans;
