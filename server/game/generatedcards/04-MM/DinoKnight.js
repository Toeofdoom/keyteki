const Card = require('../../Card.js');

class DinoKnight extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

DinoKnight.id = 'dino-knight';

module.exports = DinoKnight;
