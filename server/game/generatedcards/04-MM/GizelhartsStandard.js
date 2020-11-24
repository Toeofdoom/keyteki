const Card = require('../../Card.js');

class GizelhartsStandard extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.hasToken('amber'),
            effect: ability.effects.modifyArmor({ amount: 1 })
        });
        this.play({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.exalt()
            }
        });
    }
}

GizelhartsStandard.id = 'gizelhart-s-standard';

module.exports = GizelhartsStandard;
