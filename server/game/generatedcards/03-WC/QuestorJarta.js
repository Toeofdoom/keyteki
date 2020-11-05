const Card = require('../../Card.js');

class QuestorJarta extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"elusive","count":null}]
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
