const Card = require('../../Card.js');

class MegaGangerChieftain extends Card {
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

MegaGangerChieftain.id = 'mega-ganger-chieftain';

module.exports = MegaGangerChieftain;
