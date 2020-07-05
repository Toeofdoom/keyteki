const Card = require('../../Card.js');

class ShoulderId extends Card {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onDamageDealt: (event, context) =>
                    event.fightEvent && event.damageSource === context.source
            },
            gameAction: [
                ability.actions.addEventToWindow((context) => ({
                    event: context.event,
                    eventToAdd: ability.actions.steal()
                })),
                ability.actions.changeEvent((context) => ({
                    event: context.event,
                    cancel: true
                }))
            ]
        });
    }
}

ShoulderId.id = 'shoulder-id';

module.exports = ShoulderId;
