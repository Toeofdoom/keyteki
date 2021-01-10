const Card = require('../../Card.js');

class SoulFiddle extends Card {
    //Action: Enrage a creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.enrage()
            }
        });
    }
}

SoulFiddle.id = 'soul-fiddle';

module.exports = SoulFiddle;
