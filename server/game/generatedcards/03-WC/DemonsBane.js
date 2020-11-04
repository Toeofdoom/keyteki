const Card = require('../../Card.js');

class DemonsBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('demon'),
                gameAction: ability.actions.destroy()
            }
        });
        /*[]*/
    }
}

DemonsBane.id = 'demons--bane';

module.exports = DemonsBane;
