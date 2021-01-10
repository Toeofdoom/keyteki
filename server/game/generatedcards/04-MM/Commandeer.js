const Card = require('../../Card.js');

class Commandeer extends Card {
    //Play: For the remainder of the turn, after you play another card, a friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onCardPlayed: (event, context) =>
                        event.player === context.player && event.card !== context.source
                },
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    gameAction: ability.actions.capture({ amount: 1 })
                }
            })
        });
    }
}

Commandeer.id = 'commandeer';

module.exports = Commandeer;
