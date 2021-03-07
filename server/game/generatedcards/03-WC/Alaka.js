const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class Alaka extends Card {
    //If you have used a creature to fight this turn, $this enters play ready.
    setupCardAbilities(ability) {
        this.onFightTracker = new SimpleEventTracker(this.game, 'onFight');
        this.persistentEffect({
            location: 'any',
            condition: (context) =>
                this.onFightTracker.events.filter(
                    (event) => event.player === context.player && event.card.type === 'creature'
                ).length >= 1,
            effect: ability.effects.entersPlayReady()
        });
    }
}

Alaka.id = 'alaka';

module.exports = Alaka;
