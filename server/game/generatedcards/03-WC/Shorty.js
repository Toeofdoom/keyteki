const Card = require('../../Card.js');

class Shorty extends Card {
    setupCardAbilities(ability) {
        //Keywords: Assault 4
        this.reap({
            gameAction: ability.actions.enrage((context) => ({
                target: context.source
            }))
        });
    }
}

Shorty.id = 'shorty';

module.exports = Shorty;
