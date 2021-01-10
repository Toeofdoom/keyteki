const Card = require('../../Card.js');

class Foozle extends Card {
    //Reap: If an enemy creature has been destroyed this turn, gain 1A.
    setupCardAbilities(ability) {
        this.destroyedTracker = { events: [] };
        this.reap({
            condition: () =>
                this.destroyedTracker.events.filter((event) => event.card.type === 'creature')
                    .length >= 1,
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

Foozle.id = 'foozle';

module.exports = Foozle;
