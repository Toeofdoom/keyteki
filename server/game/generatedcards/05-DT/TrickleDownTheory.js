const Card = require('../../Card.js');

class TrickleDownTheory extends Card {
    //Play: Raise the tide.
    //Omni: Gain 1A if your opponent has 6A or more.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.raiseTide()
        });
        this.omni({
            condition: (context) => context.player.opponent.amber >= 6,
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

TrickleDownTheory.id = 'trickle-down-theory';

module.exports = TrickleDownTheory;
