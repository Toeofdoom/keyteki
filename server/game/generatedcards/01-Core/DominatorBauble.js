const Card = require('../../Card.js');

class DominatorBauble extends Card {
    //Action: Use a friendly creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card) => card.exhausted === false,
                gameAction: ability.actions.use()
            }
        });
    }
}

DominatorBauble.id = 'dominator-bauble';

module.exports = DominatorBauble;
