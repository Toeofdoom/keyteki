const Card = require('../../Card.js');

class HaplessCadet extends Card {
    setupCardAbilities(ability) {
        //Keywords: Taunt
        this.destroyed({
            gameAction: ability.actions.loseAmber({ amount: 3 })
        });
    }
}

HaplessCadet.id = 'hapless-cadet';

module.exports = HaplessCadet;
