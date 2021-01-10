const Card = require('../../Card.js');

class Francus extends Card {
    //After an enemy creature is destroyed fighting $this, $this captures 1<A>.
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
            gameAction: ability.actions.capture((context) => ({
                target: context.source,
                amount: 1
            }))
        });
    }
}

Francus.id = 'francus';

module.exports = Francus;
