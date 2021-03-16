const Card = require('../../Card.js');

class Arise extends Card {
    //Play: Choose a house. Return each creature of that house from your discard pile to your hand. Gain 1 chain.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'house'
            },
            gameAction: ability.actions.sequential([
                ability.actions.returnToHand((context) => ({
                    target: context.player.discard.filter(
                        (card) =>
                            card.controller === context.player &&
                            card.type === 'creature' &&
                            card.hasHouse(context.house)
                    ),
                    location: 'discard'
                })),
                ability.actions.gainChains({ amount: 1 })
            ])
        });
    }
}

Arise.id = 'arise';

module.exports = Arise;