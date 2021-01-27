const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class Foozle extends Card {
    //Reap: If an enemy creature has been destroyed this turn, gain 1A.
    setupCardAbilities(ability) {
        this.onCardDestroyedTracker = new SimpleEventTracker(this.game, 'onCardDestroyed');
        this.reap({
            condition: (context) =>
                this.onCardDestroyedTracker.events.filter(
                    (event) =>
                        event.card.controller !== context.player && event.card.type === 'creature'
                ).length >= 1,
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

Foozle.id = 'foozle';

module.exports = Foozle;
