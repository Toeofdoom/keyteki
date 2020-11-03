const Card = require('../../Card.js');

class LegatusRaptor extends Card {
    setupCardAbilities(ability) {
        this.fight({
            gameAction: [
                ability.actions.exalt(),
                ability.actions.sequential([ability.actions.ready(), ability.actions.use()])
            ]
        });
    }
}

LegatusRaptor.id = 'legatus-raptor';

module.exports = LegatusRaptor;
