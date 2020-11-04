const Card = require('../../Card.js');

class LegatusRaptor extends Card {
    setupCardAbilities(ability) {
        this.fight({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                target: {
                    cardType: 'creature',
                    controller: 'self',
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
