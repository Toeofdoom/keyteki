const Card = require('../../Card.js');
const SimpleEventTracker = require('../../SimpleEventTracker.js');

class FontOfTheEye extends Card {
    //Omni: If an enemy creature was destroyed this turn, a friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.onCardDestroyedTracker = new SimpleEventTracker(this.game, 'onCardDestroyed');
        this.omni({
            condition: (context) =>
                this.onCardDestroyedTracker.events.filter(
                    (event) =>
                        event.card.controller !== context.player && event.card.type === 'creature'
                ).length >= 1,
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture({ amount: 1 })
            }
        });
    }
}

FontOfTheEye.id = 'font-of-the-eye';

module.exports = FontOfTheEye;
