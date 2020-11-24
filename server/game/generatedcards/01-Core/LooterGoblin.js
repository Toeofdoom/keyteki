const Card = require('../../Card.js');

class LooterGoblin extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onCardDestroyed: (event, context) =>
                        event.clone.controller !== context.player && event.clone.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

LooterGoblin.id = 'looter-goblin';

module.exports = LooterGoblin;
