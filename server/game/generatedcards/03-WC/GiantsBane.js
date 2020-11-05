const Card = require('../../Card.js');

class GiantsBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('giant'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

GiantsBane.id = 'giants--bane';

module.exports = GiantsBane;
