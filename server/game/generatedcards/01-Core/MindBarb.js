const Card = require('../../Card.js');

class MindBarb extends Card {
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.discardAtRandom({
                amount: 1,
                location: 'hand'
            })
        });
    }
}

MindBarb.id = 'mind-barb';

module.exports = MindBarb;
