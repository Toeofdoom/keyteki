const Card = require('../../Card.js');

class OrtannuSBinding extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            }
        });
    }
}

OrtannuSBinding.id = 'ortannu-s-binding';

module.exports = OrtannuSBinding;
