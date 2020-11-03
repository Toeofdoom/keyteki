const Card = require('../../Card.js');

class DinoThief extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

DinoThief.id = 'dino-thief';

module.exports = DinoThief;
