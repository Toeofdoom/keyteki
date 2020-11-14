const Card = require('../../Card.js');

class FlameWreathed extends Card {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.modifyPower({ amount: 2 }),
                ability.effects.addKeyword({
                    hazardous: 2
                })
            ]
        });
    }
}

FlameWreathed.id = 'flame-wreathed';

module.exports = FlameWreathed;
