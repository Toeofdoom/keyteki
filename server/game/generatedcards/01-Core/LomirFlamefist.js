const Card = require('../../Card.js');

class LomirFlamefist extends Card {
    //Play: If your opponent has 7<A> or more, they lose 2<A>.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) => context.player.opponent.amber >= 7,
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 2,
                target: context.player.opponent
            }))
        });
    }
}

LomirFlamefist.id = 'lomir-flamefist';

module.exports = LomirFlamefist;
