const Card = require('../../Card.js');

class HumansBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('human'),
                gameAction: ability.actions.destroy()
            }
        });
        /*[]*/
    }
}

HumansBane.id = 'humans--bane';

module.exports = HumansBane;
