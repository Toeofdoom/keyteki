const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class MegaAlaka extends Card {
    //If you have used a creature to fight this turn, $this enters play ready.
    setupCardAbilities(ability) {
        this.onFightTracker = new SimpleEventTracker(this.game, 'onFight');
        this.persistentEffect({
            location: 'any',
            condition: () =>
                this.onFightTracker.events.filter((event) => event.card.type === 'creature')
                    .length >= 1,
            effect: ability.effects.entersPlayReady()
        });
    }
}

MegaAlaka.id = 'mega-alaka';

module.exports = MegaAlaka;
