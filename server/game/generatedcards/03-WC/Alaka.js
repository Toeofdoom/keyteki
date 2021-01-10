const Card = require('../../Card.js');

class Alaka extends Card {
    //If you have used a creature to fight this turn, $this enters play ready.
    setupCardAbilities(ability) {
        this.fightTracker = { events: [] };
        this.persistentEffect({
            location: 'any',
            condition: () =>
                this.fightTracker.events.filter((event) => event.card.type === 'creature').length >=
                1,
            effect: ability.effects.entersPlayReady()
        });
    }
}

Alaka.id = 'alaka';

module.exports = Alaka;
