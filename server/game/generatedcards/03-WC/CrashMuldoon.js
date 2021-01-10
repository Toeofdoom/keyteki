const Card = require('../../Card.js');

class CrashMuldoon extends Card {
    //Deploy.
    //$this enters play ready.
    //Action: Use a neighboring non-Star Alliance creature.
    setupCardAbilities(ability) {
        //Keywords: deploy
        this.persistentEffect({
            location: 'any',
            effect: ability.effects.entersPlayReady()
        });
        this.action({
            target: {
                cardType: 'creature',
                cardCondition: (card, context) =>
                    context.source.neighbors.includes(card) && !card.hasHouse('staralliance'),
                gameAction: ability.actions.use()
            }
        });
    }
}

CrashMuldoon.id = 'crash-muldoon';

module.exports = CrashMuldoon;
