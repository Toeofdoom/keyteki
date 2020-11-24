const Card = require('../../Card.js');

class UmbraBot extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
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

UmbraBot.id = 'umbra-bot';

module.exports = UmbraBot;
