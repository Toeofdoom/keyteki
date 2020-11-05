const Card = require('../../Card.js');

class ThievesBane extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('thief'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

ThievesBane.id = 'thieves--bane';

module.exports = ThievesBane;
