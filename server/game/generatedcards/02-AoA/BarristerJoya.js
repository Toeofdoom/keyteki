const Card = require('../../Card.js');

class BarristerJoya extends Card {
    //Enemy creatures cannot reap.
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.cardCannot('reap')
        });
    }
}

BarristerJoya.id = 'barrister-joya';

module.exports = BarristerJoya;
