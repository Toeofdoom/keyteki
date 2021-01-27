const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class Overrun extends Card {
    //Play: If 3 or more enemy creatures have been destroyed this turn, your opponent loses 2A.
    setupCardAbilities(ability) {
        this.onCardDestroyedTracker = new SimpleEventTracker(this.game, 'onCardDestroyed');
        this.play({
            condition: (context) =>
                this.onCardDestroyedTracker.events.filter(
                    (event) =>
                        event.card.controller !== context.player && event.card.type === 'creature'
                ).length >= 3,
            gameAction: ability.actions.loseAmber({ amount: 2 })
        });
    }
}

Overrun.id = 'overrun';

module.exports = Overrun;
