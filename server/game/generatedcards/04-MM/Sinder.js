const Card = require('../../Card.js');

class Sinder extends Card {
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.reap({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.destroy()
            }
        });
    }
}

Sinder.id = 'sinder';

module.exports = Sinder;
