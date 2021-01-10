const Card = require('../../Card.js');

class ChotaHazri extends Card {
    //Play: Lose 1A. If you do, you may forge a key at current cost.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 1,
                target: context.player
            })),
            then: {
                may: 'Do something',
                gameAction: ability.actions.forgeKey()
            }
        });
    }
}

ChotaHazri.id = 'chota-hazri';

module.exports = ChotaHazri;
