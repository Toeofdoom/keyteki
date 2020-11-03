const Card = require('../../Card.js');

class SacroSaurus extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

SacroSaurus.id = 'sacro-saurus';

module.exports = SacroSaurus;
