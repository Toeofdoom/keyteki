const Card = require('../../Card.js');

class SpecialAgentFingers extends Card {
    setupCardAbilities(ability) {
        //Keywords: Elusive
        this.action({
            gameAction: ability.actions.steal(1)
        });
    }
}

SpecialAgentFingers.id = 'special-agent-fingers';

module.exports = SpecialAgentFingers;
