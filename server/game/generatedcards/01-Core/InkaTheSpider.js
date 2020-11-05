const Card = require('../../Card.js');

class InkaTheSpider extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"poison","count":null}]
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
