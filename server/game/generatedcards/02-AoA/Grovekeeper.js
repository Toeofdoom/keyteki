const Card = require('../../Card.js');

class Grovekeeper extends Card {
    //At the end of your turn, give each neighboring creature a +1 power counter.
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onRoundEnded: (event, context) => context.player === this.game.activePlayer
            },
            gameAction: ability.actions.addPowerCounter((context) => ({
                target: context.game.creaturesInPlay.filter((card) =>
                    context.source.neighbors.includes(card)
                ),
                amount: 1
            }))
        });
    }
}

Grovekeeper.id = 'grovekeeper';

module.exports = Grovekeeper;
