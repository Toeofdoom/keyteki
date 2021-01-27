const Card = require('../../Card.js');

class LycoSaurus extends Card {
    //Skirmish. (When you use this creature to fight, it is dealt no damage in return.)
    //Play: You may exalt $this. If you do, deal 3D to a creature.
    setupCardAbilities(ability) {
        //Keywords: skirmish
        this.play({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount: 1
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.dealDamage({ amount: 3 })
                }
            }
        });
    }
}

LycoSaurus.id = 'lyco-saurus';

module.exports = LycoSaurus;
