const Card = require('../../Card.js');

class Warsong extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onFight: (event, context) =>
                        event.card.controller === context.player && event.card.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

Warsong.id = 'warsong';

module.exports = Warsong;
