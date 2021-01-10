const Card = require('../../Card.js');

class MedicIngram extends Card {
    //Play/Fight/Reap: You may heal 3 damage from a creature and ward it.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            target: {
                optional: true,
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.heal({ amount: 3 }),
                    ability.actions.ward()
                ])
            }
        });
    }
}

MedicIngram.id = 'medic-ingram';

module.exports = MedicIngram;
