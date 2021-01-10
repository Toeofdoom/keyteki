const Card = require('../../Card.js');

class Humble extends Card {
    //Play: Exhaust a creature. If you do, move 3A from that creature to the common supply.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.exhaust()
            },
            then: (preThenContext) => ({
                gameAction: ability.actions.removeAmber({
                    target: preThenContext.target,
                    amount: 3
                })
            })
        });
    }
}

Humble.id = 'humble';

module.exports = Humble;
