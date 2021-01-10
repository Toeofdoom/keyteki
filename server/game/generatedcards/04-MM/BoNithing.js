const Card = require('../../Card.js');

class BoNithing extends Card {
    //Play: Steal 1A for each forged key your opponent has.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.steal((context) => ({
                amount: 1 * context.player.opponent.getForgedKeys()
            }))
        });
    }
}

BoNithing.id = 'bo-nithing';

module.exports = BoNithing;
