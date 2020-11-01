const Card = require('../../Card.js');

class DamoBeast extends Card {
    setupCardAbilities(ability) {
        //Keywords: Skirmish
        this.destroyed({
            gameAction: ability.actions.steal(1)
        });
    }
}

DamoBeast.id = 'dæmo-beast';

module.exports = DamoBeast;
