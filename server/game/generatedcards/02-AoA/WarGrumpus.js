const Card = require('../../Card.js');

class WarGrumpus extends Card {
    //Fight/Reap: Ready and fight with a neighboring Giant.
    //
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                cardCondition: (card, context) =>
                    context.source.neighbors.includes(card) && card.hasTrait('giant'),
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
            }
        });
    }
}

WarGrumpus.id = 'war-grumpus';

module.exports = WarGrumpus;
