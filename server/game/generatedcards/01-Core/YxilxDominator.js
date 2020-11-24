const Card = require('../../Card.js');

class YxilxDominator extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //$this enters play stunned.
    //
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.persistentEffect({
            location: 'any',
            effect: ability.effects.entersPlayStunned()
        });
    }
}

YxilxDominator.id = 'yxilx-dominator';

module.exports = YxilxDominator;
