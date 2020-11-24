const Card = require('../../Card.js');

class DamoBeast extends Card {
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoBeast.id = 'dæmo-beast';

module.exports = DamoBeast;
