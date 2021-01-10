const Card = require('../../Card.js');

class Eunoia extends Card {
    //After an enemy creature is destroyed fighting $this, gain 1A and heal 2 damage from $this.
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
                ability.actions.gainAmber({ amount: 1 }),
                ability.actions.heal((context) => ({
                    target: context.source,
                    amount: 2
                }))
            ])
        });
    }
}

Eunoia.id = 'eunoia';

module.exports = Eunoia;
