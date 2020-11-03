const Card = require('../../Card.js');

class DinoFiend extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DinoFiend.id = 'dino-fiend';

module.exports = DinoFiend;
