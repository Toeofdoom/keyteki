const Card = require('../../Card.js');

class HuntingWitch extends Card {
    //Each time you play another creature, gain 1<A>.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player &&
                    event.card.type === 'creature' &&
                    event.card !== context.source
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

HuntingWitch.id = 'hunting-witch';

module.exports = HuntingWitch;