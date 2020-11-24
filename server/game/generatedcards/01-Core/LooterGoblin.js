const Card = require('../../Card.js');

class LooterGoblin extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Reap: For the remainder of the turn, gain 1<A> each time an enemy creature is destroyed.
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
