const Card = require('../../Card.js');

class SpecialAgentFingers extends Card {
    //Elusive.
    //Action: Steal 1A.
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

SpecialAgentFingers.id = 'special-agent-fingers';

module.exports = SpecialAgentFingers;