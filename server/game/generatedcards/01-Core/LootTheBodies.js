const Card = require('../../Card.js');

class LootTheBodies extends Card {
    //Play: For the remainder of the turn, gain 1<A> each time an enemy creature is destroyed.
    setupCardAbilities(ability) {
        this.play({
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

LootTheBodies.id = 'loot-the-bodies';

module.exports = LootTheBodies;
