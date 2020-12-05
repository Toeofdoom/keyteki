const Card = require('../../Card.js');

class ShatteredThrone extends Card {
    //After a creature is used to fight, it captures 1A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onFight: (event) => event.attacker.type === 'creature'
            },
            gameAction: ability.actions.capture((context) => ({
                target: context.event.attacker,
                amount: 1,
                player: context.event.attacker.controller.opponent
            }))
        });
    }
}

ShatteredThrone.id = 'shattered-throne';

module.exports = ShatteredThrone;
