const Card = require('../../Card.js');

class SanitationEngineer extends Card {
    setupCardAbilities(ability) {
        //Keywords: hazardous 1
        this.reap({
            gameAction: ability.actions.discard((context) => ({
                amount: 1,
                location: 'hand',
                target: context.player
            }))
        });
    }
}

SanitationEngineer.id = 'sanitation-engineer';

module.exports = SanitationEngineer;
