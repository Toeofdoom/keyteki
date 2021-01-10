const Card = require('../../Card.js');

class WorldTree extends Card {
    //Action: Return a creature from your discard pile to the top of your deck.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                location: 'discard',
                gameAction: ability.actions.returnToHand({ location: 'discard' })
            }
        });
    }
}

WorldTree.id = 'world-tree';

module.exports = WorldTree;
