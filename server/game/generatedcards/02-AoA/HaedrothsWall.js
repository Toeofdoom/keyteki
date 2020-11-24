const Card = require('../../Card.js');

class HaedrothsWall extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.isOnFlank(),
            effect: ability.effects.modifyPower({ amount: 2 })
        });
    }
}

HaedrothsWall.id = 'haedroth-s-wall';

module.exports = HaedrothsWall;
