const Card = require('../../Card.js');

class PrescriptiveGrammarbot extends Card {
    setupCardAbilities(ability) {
        //Keywords: [{"name":"taunt","count":null},{"name":"hazardous","count":3}]
        this.reap({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.enrage()
            }
        });
    }
}

PrescriptiveGrammarbot.id = 'prescriptive-grammarbot';

module.exports = PrescriptiveGrammarbot;
