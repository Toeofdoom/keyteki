const Card = require('../../Card.js');

class Hapsis extends Card {
    //After an enemy creature is destroyed fighting $this, ward $this and draw a card.
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
                ability.actions.ward((context) => ({
                    target: context.source
                })),
                ability.actions.draw({ amount: 1 })
            ])
        });
    }
}

Hapsis.id = 'hapsis';

module.exports = Hapsis;
