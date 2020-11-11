const Card = require('../../Card.js');

class TheGreyRider extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"deploy","count":null}]
        this.play({
            fight: true,
            reap: true,
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

TheGreyRider.id = 'the-grey-rider';

module.exports = TheGreyRider;
