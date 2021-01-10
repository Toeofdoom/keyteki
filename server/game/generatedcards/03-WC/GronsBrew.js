const Card = require('../../Card.js');

class GronsBrew extends Card {
    //Play: Give a creature two +1 power counters.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.addPowerCounter({ amount: 2 })
            }
        });
    }
}

GronsBrew.id = 'gron-s-brew';

module.exports = GronsBrew;
