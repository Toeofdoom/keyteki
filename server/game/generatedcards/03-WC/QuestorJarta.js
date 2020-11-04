const Card = require('../../Card.js');

class QuestorJarta extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.reap({
            optional: true,
            gameAction: ability.actions.exalt((context) => ({
                target: context.source
            })),
            then: {
                gameAction: ability.actions.gainAmber({ amount: 1 })
            }
        });
    }
}

QuestorJarta.id = 'questor-jarta';

module.exports = QuestorJarta;
