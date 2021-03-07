const Card = require('../../Card.js');

class TwinBoltEmission extends Card {
    //Play: Deal 2D to a creature and deal 2D to a different creature.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: (preThenContext) => ({
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    cardCondition: (card) => card !== preThenContext.target,
                    gameAction: ability.actions.dealDamage({ amount: 2 })
                }
            })
        });
    }
}

TwinBoltEmission.id = 'twin-bolt-emission';

module.exports = TwinBoltEmission;
