const Card = require('../../Card.js');

class ArdentHero extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            effect: ability.effects.cardCannot(
                'damage',
                (context) =>
                    context.source.type === 'creature' &&
                    (context.source.hasTrait('mutant') || context.source.power >= 5)
            )
        });
    }
}

ArdentHero.id = 'ardent-hero';

module.exports = ArdentHero;
