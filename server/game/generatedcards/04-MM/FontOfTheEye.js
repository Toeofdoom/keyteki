const Card = require('../../Card.js');

class FontOfTheEye extends Card {
    //Omni: If an enemy creature was destroyed this turn, a friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.destroyedTracker = { events: [] };
        this.omni({
            condition: () =>
                this.destroyedTracker.events.filter((event) => event.card.type === 'creature')
                    .length >= 1,
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
