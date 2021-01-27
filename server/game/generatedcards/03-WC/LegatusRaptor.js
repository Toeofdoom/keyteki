const Card = require('../../Card.js');

class LegatusRaptor extends Card {
    //Fight: You may exalt $this. If you do, ready and use another friendly creature.
    setupCardAbilities(ability) {
        this.fight({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source,
                amount: 1
            })),
            then: {
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    cardCondition: (card, context) => card !== context.source,
                    gameAction: ability.actions.sequential([
                        ability.actions.ready(),
                        ability.actions.use()
                    ])
                }
            }
        });
    }
}

LegatusRaptor.id = 'legatus-raptor';

module.exports = LegatusRaptor;
