const Card = require('../../Card.js');

class CarloPhantom extends Card {
    //Elusive. Skirmish.
    //Each time you play an artifact, steal 1<A>.
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
