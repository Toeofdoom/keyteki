const Card = require('../../Card.js');

class BloodOfTitans extends Card {
    //This creature gets +5 power.
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.modifyPower({ amount: 5 })
        });
    }
}

BloodOfTitans.id = 'blood-of-titans';

module.exports = BloodOfTitans;
