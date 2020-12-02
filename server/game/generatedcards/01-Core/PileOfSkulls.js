const Card = require('../../Card.js');

class PileOfSkulls extends Card {
    //Each time an enemy creature is destroyed during your turn, a friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event, context) =>
                    event.clone.controller !== context.player &&
                    event.clone.type === 'creature' &&
                    context.player === this.game.activePlayer
            },
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture({ amount: 1 })
            }
        });
    }
}

PileOfSkulls.id = 'pile-of-skulls';

module.exports = PileOfSkulls;
