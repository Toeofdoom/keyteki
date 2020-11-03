const Card = require('../../Card.js');

class UmbraSaurus extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

UmbraSaurus.id = 'umbra-saurus';

module.exports = UmbraSaurus;
