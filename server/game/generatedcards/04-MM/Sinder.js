const Card = require('../../Card.js');

class Sinder extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Reap: Destroy a friendly creature.
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
