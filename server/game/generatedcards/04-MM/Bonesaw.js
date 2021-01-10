const Card = require('../../Card.js');

class Bonesaw extends Card {
    //If a friendly creature was destroyed this turn, $this enters play ready.
    //
    setupCardAbilities(ability) {
        this.destroyedTracker = { events: [] };
        this.persistentEffect({
            location: 'any',
            condition: () =>
                this.destroyedTracker.events.filter((event) => event.card.type === 'creature')
                    .length >= 1,
            effect: ability.effects.entersPlayReady()
        });
    }
}

Bonesaw.id = 'bonesaw';

module.exports = Bonesaw;
