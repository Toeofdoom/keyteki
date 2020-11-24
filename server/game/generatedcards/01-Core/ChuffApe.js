const Card = require('../../Card.js');

class ChuffApe extends Card {
    //Taunt. (This creature’s neighbors cannot be attacked unless they have taunt.)
    //$this enters play stunned.
    //Fight/Reap: You may sacrifice another friendly creature. If you do, fully heal $this.
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
