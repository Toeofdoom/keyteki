const Card = require('../../Card.js');

class CrystalHive extends Card {
    //Action: For the remainder of the turn, gain 1<A> each time a creature reaps.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.forRemainderOfTurn({
                when: {
                    onReap: (event) => event.card.type === 'creature'
                },
                gameAction: ability.actions.gainAmber({ amount: 1 })
            })
        });
    }
}

CrystalHive.id = 'crystal-hive';

module.exports = CrystalHive;
