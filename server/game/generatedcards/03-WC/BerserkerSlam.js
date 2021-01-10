const Card = require('../../Card.js');

class BerserkerSlam extends Card {
    //Play: Deal 4D to a flank creature. If this damage destroys that creature, its controller loses 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.isOnFlank(),
                gameAction: ability.actions.dealDamage({ amount: 4 })
            },
            then: (preThenContext) => ({
                condition: (context) =>
                    context.preThenEvent.destroyEvent && context.preThenEvent.destroyEvent.resolved,
                gameAction: ability.actions.loseAmber({
                    amount: 1,
                    target: preThenContext.target.controller
                })
            })
        });
    }
}

BerserkerSlam.id = 'berserker-slam';

module.exports = BerserkerSlam;
