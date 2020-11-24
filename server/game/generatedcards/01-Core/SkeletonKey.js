const Card = require('../../Card.js');

class SkeletonKey extends Card {
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.capture({ amount: 1 })
            }
        });
    }
}

SkeletonKey.id = 'skeleton-key';

module.exports = SkeletonKey;
