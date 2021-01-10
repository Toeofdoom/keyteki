const Card = require('../../Card.js');

class DrEscotera extends Card {
    //Play: Gain 1<A> for each forged key your opponent has.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1 * context.player.opponent.getForgedKeys()
            }))
        });
    }
}

DrEscotera.id = 'dr-escotera';

module.exports = DrEscotera;
