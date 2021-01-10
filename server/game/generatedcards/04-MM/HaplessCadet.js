const Card = require('../../Card.js');

class HaplessCadet extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //Destroyed: Your opponent loses 3A.
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.destroyed({
            gameAction: ability.actions.loseAmber({ amount: 3 })
        });
    }
}

HaplessCadet.id = 'hapless-cadet';

module.exports = HaplessCadet;
