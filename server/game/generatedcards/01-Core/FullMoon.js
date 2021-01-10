const Card = require('../../Card.js');

class FullMoon extends Card {
    //Play: For the remainder of the turn, gain 1A each time you play a creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onCardPlayed: (event, context) =>
                        event.player === context.player && event.card.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

FullMoon.id = 'full-moon';

module.exports = FullMoon;
