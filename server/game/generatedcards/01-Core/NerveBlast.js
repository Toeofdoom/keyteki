const Card = require('../../Card.js');

class NerveBlast extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: [
                ability.actions.steal({ amount: 1 }),
                ability.actions.dealDamage({ amount: 2 })
            ]
        });
    }
}

NerveBlast.id = 'nerve-blast';

module.exports = NerveBlast;
