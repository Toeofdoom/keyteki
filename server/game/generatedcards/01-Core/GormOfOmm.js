const Card = require('../../Card.js');

class GormOfOmm extends Card {
    setupCardAbilities(ability) {
        this.omni({
            gameAction: [ability.actions.destroy(), ability.actions.destroy()]
        });
        /*[]*/
    }
}

GormOfOmm.id = 'gorm-of-omm';

module.exports = GormOfOmm;
