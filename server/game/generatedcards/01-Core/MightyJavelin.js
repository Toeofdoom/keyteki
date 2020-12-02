const Card = require('../../Card.js');

class MightyJavelin extends Card {
    //Omni: Sacrifice $this. Deal 4<D> to a creature.
    setupCardAbilities(ability) {
        this.omni({
            gameAction: ability.actions.sacrifice((context) => ({
                target: context.source
            })),
            then: {
                alwaysTriggers: true,
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 4 })
                }
            }
        });
    }
}

MightyJavelin.id = 'mighty-javelin';

module.exports = MightyJavelin;
