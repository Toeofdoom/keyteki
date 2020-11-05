const Card = require('../../Card.js');

class MegaShorty extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"assault","count":4}]
        this.reap({
            gameAction: ability.actions.enrage((context) => ({
                target: context.source
            }))
        });
    }
}

MegaShorty.id = 'mega-shorty';

module.exports = MegaShorty;
