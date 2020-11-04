const Card = require('../../Card.js');

class SacroBot extends Card {
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

SacroBot.id = 'sacro-bot';

module.exports = SacroBot;
