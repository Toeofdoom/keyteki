const Card = require('../../Card.js');

class Warsong extends Card {
    //Play: For the remainder of the turn, gain 1<A> each time a friendly creature fights.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onUseCard: (event, context) =>
                        event.fightEvent &&
                        event.fightEvent.attackerClone.controller === context.player &&
                        event.fightEvent.attackerClone.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

Warsong.id = 'warsong';

module.exports = Warsong;
