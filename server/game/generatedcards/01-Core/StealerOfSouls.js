const Card = require('../../Card.js');

class StealerOfSouls extends Card {
    //After an enemy creature is destroyed fighting $this, purge that creature and gain 1<A>.
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
                ability.actions.purge((context) => ({
                    target: context.event.card
                })),
                ability.actions.gainAmber({ amount: 1 })
            ])
        });
    }
}

StealerOfSouls.id = 'stealer-of-souls';

module.exports = StealerOfSouls;
