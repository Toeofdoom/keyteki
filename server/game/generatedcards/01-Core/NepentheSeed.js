const Card = require('../../Card.js');

class NepentheSeed extends Card {
    //Omni: Sacrifice $this. Return a card from your discard pile to your hand.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    controller: 'self',
                    location: 'discard',
                    gameAction: ability.actions.returnToHand({ location: 'discard' })
                }
            }
        });
    }
}

NepentheSeed.id = 'nepenthe-seed';

module.exports = NepentheSeed;
