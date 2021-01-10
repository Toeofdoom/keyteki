const Card = require('../../Card.js');

class Gravelguts extends Card {
    //After an enemy creature is destroyed fighting $this, give $this two +1 power counters.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onDamageDealt: (event, context) =>
                    event.damageSource === context.source &&
                    event.destroyEvent &&
                    event.destroyEvent.resolved &&
                    event.card.controller !== context.player &&
                    event.card.type === 'creature'
            },
            gameAction: ability.actions.addPowerCounter((context) => ({
                target: context.source,
                amount: 2
            }))
        });
    }
}

Gravelguts.id = 'gravelguts';

module.exports = Gravelguts;
