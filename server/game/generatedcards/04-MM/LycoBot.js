const Card = require('../../Card.js');

class LycoBot extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"skirmish","count":null}]
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
