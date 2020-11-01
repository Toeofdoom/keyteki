const Card = require('../../Card.js');

class MegaGroke extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.loseAmber(1)
        });
    }
}

MegaGroke.id = 'mega-groke';

module.exports = MegaGroke;
