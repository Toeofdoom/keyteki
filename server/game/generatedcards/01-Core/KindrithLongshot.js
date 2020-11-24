const Card = require('../../Card.js');

class KindrithLongshot extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive, skirmish
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            }
        });
    }
}

KindrithLongshot.id = 'kindrith-longshot';

module.exports = KindrithLongshot;
