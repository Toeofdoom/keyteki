const Card = require('../../Card.js');

class BadPenny extends Card {
    //Destroyed: Return $this to your hand.
    //
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.source
            }))
        });
    }
}

BadPenny.id = 'bad-penny';

module.exports = BadPenny;
