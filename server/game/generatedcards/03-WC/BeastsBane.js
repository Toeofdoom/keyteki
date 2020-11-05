const Card = require('../../Card.js');

class BeastsBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('beast'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

BeastsBane.id = 'beasts--bane';

module.exports = BeastsBane;
