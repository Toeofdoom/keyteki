const Card = require('../../Card.js');

class Drecker extends Card {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onDamageDealt: (event, context) =>
                    event.fightEvent &&
                    context.source.neighbors.includes(event.card) &&
                    //Experimental version because I want a semi-working version of as many cards as possible in this branch...
                    //Avoid potential infinite loops
                    context.game.currentAbilityWindow.events.length <= 40 &&
                    //Implement "as well" - if an identical event is already dealing damage to drecker don't create a new one.
                    context.game.currentAbilityWindow.events.filter(
                        (otherEvent) =>
                            otherEvent.name === 'onDamageDealt' &&
                            otherEvent.fightEvent &&
                            otherEvent.card === context.source
                    ).length == 0
            },
            effect: 'duplicate the damage dealt to {1}',
            effectArgs: (context) => context.event.card,
            gameAction: ability.actions.addEventToWindow((context) => ({
                targetEvent: context.event,
                eventToAdd: ability.actions
                    .dealDamage({
                        amount: context.event.amount,
                        damageSource: context.event.damageSource,
                        ignoreArmor: context.event.ignoreArmor,
                        fightEvent: context.event.fightEvent
                    })
                    .getEvent(context.source, context.event.context)
            }))
        });

        this.reap({
            gameAction: ability.actions.steal()
        });
    }
}

Drecker.id = 'drecker';

module.exports = Drecker;
