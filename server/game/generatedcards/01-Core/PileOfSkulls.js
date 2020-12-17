const Card = require('../../Card.js');

class PileOfSkulls extends Card {
    //Each time an enemy creature is destroyed during your turn, a friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event, context) =>
                    context.player === this.game.activePlayer &&
                    event.clone.controller !== context.player &&
                    event.clone.type === 'creature'
            },
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture((context) => ({
                    amount: 1,
                    player: context.event.clone.controller.opponent
                }))
            }
        });
    }
}

PileOfSkulls.id = 'pile-of-skulls';

module.exports = PileOfSkulls;
