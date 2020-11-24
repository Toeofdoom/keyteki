const Card = require('../../Card.js');

class TechnoKnight extends Card {
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.discard((context) => ({
                amount: 1,
                location: 'hand',
                target: context.player
            })),
            then: {
                gameAction: ability.actions.draw({ amount: 1 })
            }
        });
    }
}

TechnoKnight.id = 'techno-knight';

module.exports = TechnoKnight;
