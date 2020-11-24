const Card = require('../../Card.js');

class Hystricog extends Card {
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.action({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

Hystricog.id = 'hystricog';

module.exports = Hystricog;
