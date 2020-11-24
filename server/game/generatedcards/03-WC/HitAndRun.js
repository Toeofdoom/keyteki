const Card = require('../../Card.js');

class HitAndRun extends Card {
    //Play: Deal 2D to a creature. Return a friendly creature to your hand.
    setupCardAbilities(ability) {
        this.play({
            targets: {
                target1: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 2 })
                },
                target2: {
                    cardType: 'creature',
                    controller: 'self',
                    gameAction: ability.actions.returnToHand()
                }
            }
        });
    }
}

HitAndRun.id = 'hit-and-run';

module.exports = HitAndRun;
