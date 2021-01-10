const Card = require('../../Card.js');

class Kangaphant extends Card {
    //Each creature gains, “Reap: Destroy this creature.”
    //
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.destroy((context) => ({
                    target: context.source
                }))
            })
        });
    }
}

Kangaphant.id = 'kangaphant';

module.exports = Kangaphant;
