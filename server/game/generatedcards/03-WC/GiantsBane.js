const Card = require('../../Card.js');

class GiantsBane extends Card {
    //Play: Destroy a Giant creature.
    //
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
