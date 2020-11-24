const Card = require('../../Card.js');

class CarloPhantom extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive, skirmish
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player && event.card.type === 'artifact'
            },
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

CarloPhantom.id = 'carlo-phantom';

module.exports = CarloPhantom;
