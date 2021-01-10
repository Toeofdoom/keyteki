const Card = require('../../Card.js');

class Scylla extends Card {
    //Each enemy creature gains, “Reap: Deal 4D to this creature.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            match: (card) => card.type === 'creature',
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.dealDamage((context) => ({
                    target: context.source,
                    amount: 4
                }))
            })
        });
    }
}

Scylla.id = 'scylla';

module.exports = Scylla;
