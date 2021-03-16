const Card = require('../../Card.js');

class YantzeeGang extends Card {
    //Action: Steal 1A.
    setupCardAbilities(ability) {
        this.action({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

YantzeeGang.id = 'yantzee-gang';

module.exports = YantzeeGang;