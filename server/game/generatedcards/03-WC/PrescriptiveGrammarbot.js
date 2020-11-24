const Card = require('../../Card.js');

class PrescriptiveGrammarbot extends Card {
    //Taunt. Hazardous 3.
    //Reap: Enrage a creature.
    setupCardAbilities(ability) {
        //Keywords: taunt, hazardous 3
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
