const Card = require('../../Card.js');

class GreaterOxtet extends Card {
    //Taunt.
    //At the end of your “ready cards” step, purge a card from your hand. If you do, give $this two +1 power counters.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.reaction({
            when: {
                onCardsReadied: (event, context) => context.player === this.game.activePlayer
            },
            target: {
                controller: 'self',
                location: 'hand',
                gameAction: ability.actions.purge({ location: 'hand' })
            },
            then: {
                gameAction: ability.actions.addPowerCounter((context) => ({
                    target: context.source,
                    amount: 2
                }))
            }
        });
    }
}

GreaterOxtet.id = 'greater-oxtet';

module.exports = GreaterOxtet;
