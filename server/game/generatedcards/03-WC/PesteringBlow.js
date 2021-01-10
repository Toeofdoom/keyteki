const Card = require('../../Card.js');

class PesteringBlow extends Card {
    //Play: Deal 1D to a creature and enrage it.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.dealDamage({ amount: 1 }),
                    ability.actions.enrage()
                ])
            }
        });
    }
}

PesteringBlow.id = 'pestering-blow';

module.exports = PesteringBlow;
