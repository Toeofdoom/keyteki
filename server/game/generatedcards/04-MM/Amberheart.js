const Card = require('../../Card.js');

class Amberheart extends Card {
    //Action: Exalt, ward, and fully heal a friendly creature.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.exalt({ amount: 1 }),
                    ability.actions.ward(),
                    ability.actions.heal({ fully: true })
                ])
            }
        });
    }
}

Amberheart.id = 'æmberheart';

module.exports = Amberheart;
