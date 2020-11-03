const Card = require('../../Card.js');

class QuestorJarta extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.reap({
            gameAction: [ability.actions.exalt(), ability.actions.gainAmber({ amount: 1 })]
        });
    }
}

QuestorJarta.id = 'questor-jarta';

module.exports = QuestorJarta;
