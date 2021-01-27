const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class Bonesaw extends Card {
    //If a friendly creature was destroyed this turn, $this enters play ready.
    //
    setupCardAbilities(ability) {
        this.onCardDestroyedTracker = new SimpleEventTracker(this.game, 'onCardDestroyed');
        this.persistentEffect({
            location: 'any',
            condition: (context) =>
                this.onCardDestroyedTracker.events.filter(
                    (event) =>
                        event.card.controller === context.player && event.card.type === 'creature'
                ).length >= 1,
            effect: ability.effects.entersPlayReady()
        });
    }
}

Bonesaw.id = 'bonesaw';

module.exports = Bonesaw;
