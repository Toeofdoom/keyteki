const Card = require('../../Card.js');

class Krump extends Card {
    //After an enemy creature is destroyed fighting $this, its controller loses 1<A>.
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
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 1,
                target: context.event.card.controller
            }))
        });
    }
}

Krump.id = 'krump';

module.exports = Krump;
