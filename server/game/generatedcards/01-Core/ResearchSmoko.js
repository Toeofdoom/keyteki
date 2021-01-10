const Card = require('../../Card.js');

class ResearchSmoko extends Card {
    //Destroyed: Archive the top card of your deck.
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}

ResearchSmoko.id = 'research-smoko';

module.exports = ResearchSmoko;
