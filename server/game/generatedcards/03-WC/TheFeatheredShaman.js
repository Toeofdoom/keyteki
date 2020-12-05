const Card = require('../../Card.js');

class TheFeatheredShaman extends Card {
    //Elusive.
    //Fight/Reap: Ward each of $this’s neighbors.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.fight({
            reap: true,
            target: {
                mode: '',
                numCards: '',
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.ward()
            }
        });
    }
}

TheFeatheredShaman.id = 'the-feathered-shaman';

module.exports = TheFeatheredShaman;
