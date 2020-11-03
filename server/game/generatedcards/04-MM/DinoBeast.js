const Card = require('../../Card.js');

class DinoBeast extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

DinoBeast.id = 'dino-beast';

module.exports = DinoBeast;
