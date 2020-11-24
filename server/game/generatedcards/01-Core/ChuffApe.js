const Card = require('../../Card.js');

class ChuffApe extends Card {
    setupCardAbilities(ability) {
        //Keywords: taunt
        this.persistentEffect({
            location: 'any',
            effect: ability.effects.entersPlayStunned()
        });
        this.fight({
            reap: true,
            optional: true,
            target: {
                cardType: 'creature',
                controller: 'self',
                cardCondition: (card, context) => card !== context.source,
                gameAction: ability.actions.sacrifice()
            },
            then: {
                gameAction: ability.actions.heal((context) => ({
                    target: context.source,
                    fully: true
                }))
            }
        });
    }
}

ChuffApe.id = 'chuff-ape';

module.exports = ChuffApe;
