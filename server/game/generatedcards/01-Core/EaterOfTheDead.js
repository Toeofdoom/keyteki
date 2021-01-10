const Card = require('../../Card.js');

class EaterOfTheDead extends Card {
    //Fight/Reap: Purge a creature from a discard pile. If you do, put a +1 power counter on $this.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                controller: 'any',
                location: 'discard',
                gameAction: ability.actions.purge({ location: 'discard' })
            },
            then: {
                gameAction: ability.actions.addPowerCounter((context) => ({
                    target: context.source,
                    amount: 1
                }))
            }
        });
    }
}

EaterOfTheDead.id = 'eater-of-the-dead';

module.exports = EaterOfTheDead;
