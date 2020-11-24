const Card = require('../../Card.js');

class SpecialAgentFingers extends Card {
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.action({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

SpecialAgentFingers.id = 'special-agent-fingers';

module.exports = SpecialAgentFingers;
