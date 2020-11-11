const Card = require('../../Card.js');

class CrashMuldoon extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"deploy","count":null}]
        this.persistentEffect({
            location: 'any',
            effect: ability.effects.entersPlayReady()
        });
        this.action({
            target: {
                cardType: 'creature',
                cardCondition: (card, context) =>
                    card.exhausted === false &&
                    context.source.neighbors.includes(card) &&
                    !card.hasHouse('staralliance'),
                gameAction: ability.actions.use()
            }
        });
    }
}

CrashMuldoon.id = 'crash-muldoon';

module.exports = CrashMuldoon;
