const Card = require('../../Card.js');

class ResearchSmoko extends Card {
    //Destroyed: Archive the top card of your deck.
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.archive((context) => ({
                target: context.player.deck.slice(0, Math.min(context.player.deck.length, 1)),
                location: 'deck'
            }))
        });
    }
}

ResearchSmoko.id = 'research-smoko';

module.exports = ResearchSmoko;
