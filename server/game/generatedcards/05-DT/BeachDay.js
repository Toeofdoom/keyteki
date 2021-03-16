const Card = require('../../Card.js');

class BeachDay extends Card {
    //Play: Return a creature to its owner's hand. If the tide is high, gain 1A.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.returnToHand()
            },
            then: {
                alwaysTriggers: true,
                condition: (context) => context.player.isTideHigh(),
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}

BeachDay.id = 'beach-day';

module.exports = BeachDay;
