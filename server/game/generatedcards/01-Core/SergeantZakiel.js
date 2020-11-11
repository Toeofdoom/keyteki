const Card = require('../../Card.js');

class SergeantZakiel extends Card {
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

SergeantZakiel.id = 'sergeant-zakiel';

module.exports = SergeantZakiel;
