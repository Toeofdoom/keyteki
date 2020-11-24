const Card = require('../../Card.js');

class LycoBot extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Reap: Discard a card from your hand. If you do, draw a card.
    setupCardAbilities(ability) {
        //Keywords: skirmish
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

LycoBot.id = 'lyco-bot';

module.exports = LycoBot;
