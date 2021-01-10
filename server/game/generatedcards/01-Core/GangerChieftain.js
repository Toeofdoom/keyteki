const Card = require('../../Card.js');

class GangerChieftain extends Card {
    //Play: You may ready and fight with a neighboring creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                optional: true,
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
