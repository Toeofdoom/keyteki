const Card = require('../../Card.js');

class TheGreyRider extends Card {
    //Deploy. (This creature can enter play anywhere in your battleline.)
    //Play/Fight/Reap: You may ready and fight with a neighboring creature.
    setupCardAbilities(ability) {
        //Keywords: deploy
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
