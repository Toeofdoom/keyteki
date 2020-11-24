const Card = require('../../Card.js');

class DamoBot extends Card {
    //Reap: Discard a card from your hand. If you do, draw a card.
    //Destroyed: Steal 1A.
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
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DamoBot.id = 'dæmo-bot';

module.exports = DamoBot;
