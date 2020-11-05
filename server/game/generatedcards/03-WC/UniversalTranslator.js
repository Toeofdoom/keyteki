const Card = require('../../Card.js');

class UniversalTranslator extends Card {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.gainAbility('fight', {
                    reap: true,
                    target: {
                        cardType: 'creature',
                        controller: 'self',
                        cardCondition: (card) =>
                            card.exhausted === false && !card.hasHouse('staralliance'),
                        gameAction: ability.actions.use()
                    }
                })
            ]
        });
    }
}

UniversalTranslator.id = 'universal-translator';

module.exports = UniversalTranslator;
