const Card = require('../../Card.js');

class DrainingTouch extends Card {
    //Play: Destroy a creature with no A on it.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => !card.hasToken('amber'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}

DrainingTouch.id = 'draining-touch';

module.exports = DrainingTouch;
