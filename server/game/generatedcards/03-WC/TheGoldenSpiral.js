const Card = require('../../Card.js');

class TheGoldenSpiral extends Card {
    //Action: Exalt a friendly creature. Ready and use that creature.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.sequential([
                    ability.actions.exalt({ amount: 1 }),
                    ability.actions.sequential([ability.actions.ready(), ability.actions.use()])
                ])
            }
        });
    }
}

TheGoldenSpiral.id = 'the-golden-spiral';

module.exports = TheGoldenSpiral;
