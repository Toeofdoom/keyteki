const Card = require('../../Card.js');

class NerveBlast extends Card {
    //Play: Steal 1A. If you do, deal 2D to a creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal({ amount: 1 }),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 2 })
                }
            }
        });
    }
}

NerveBlast.id = 'nerve-blast';

module.exports = NerveBlast;
