const Card = require('../../Card.js');

class GangerChieftain extends Card {
    setupCardAbilities(ability) {
        this.play({
            optional: true,
            target: {
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
            }
        });
    }
}

GangerChieftain.id = 'ganger-chieftain';

module.exports = GangerChieftain;
