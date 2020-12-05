const Card = require('../../Card.js');

class SkeletonKey extends Card {
    //Action: A friendly creature captures 1A.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture((context) => ({
                    amount: 1,
                    player: context.target.controller.opponent
                }))
            }
        });
    }
}

SkeletonKey.id = 'skeleton-key';

module.exports = SkeletonKey;
