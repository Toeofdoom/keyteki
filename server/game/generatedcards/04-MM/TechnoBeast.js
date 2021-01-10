const Card = require('../../Card.js');

class TechnoBeast extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.reap({
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.discard({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
    }
}

TechnoBeast.id = 'techno-beast';

module.exports = TechnoBeast;
