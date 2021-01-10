const Card = require('../../Card.js');

class Mugwump extends Card {
    //After an enemy creature is destroyed fighting $this, fully heal $this and give it a +1 power counter.
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
            gameAction: ability.actions.sequential([
                ability.actions.heal((context) => ({
                    target: context.source,
                    fully: true
                })),
                ability.actions.addPowerCounter((context) => ({
                    target: context.event.card,
                    amount: 1
                }))
            ])
        });
    }
}

Mugwump.id = 'mugwump';

module.exports = Mugwump;
