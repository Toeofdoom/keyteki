const Card = require('../../Card.js');

class Bulleteye extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.reap({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.isOnFlank(),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

Bulleteye.id = 'bulleteye';

module.exports = Bulleteye;
