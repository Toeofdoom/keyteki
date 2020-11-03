const Card = require('../../Card.js');

class LycoSaurus extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.play({
            gameAction: [ability.actions.exalt(), ability.actions.dealDamage({ amount: 3 })]
        });
    }
}

LycoSaurus.id = 'lyco-saurus';

module.exports = LycoSaurus;
