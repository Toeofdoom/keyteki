const Card = require('../../Card.js');

class InkaTheSpider extends Card {
    //Poison. (Any damage dealt by this creature’s power during a fight destroys the damaged creature.)
    //Play/Reap: Stun a creature.
    //
    setupCardAbilities(ability) {
        //Keywords: poison
        this.play({
            reap: true,
            target: {
                cardType: 'creature',
                gameAction: ability.actions.stun()
            }
        });
    }
}

InkaTheSpider.id = 'inka-the-spider';

module.exports = InkaTheSpider;
