const Card = require('../../Card.js');

class MightyJavelin extends Card {
    //Omni: Sacrifice $this. Deal 4<D> to a creature.
    setupCardAbilities(ability) {
        this.omni({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 4 })
            },
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            }))
        });
    }
}

MightyJavelin.id = 'mighty-javelin';

module.exports = MightyJavelin;
