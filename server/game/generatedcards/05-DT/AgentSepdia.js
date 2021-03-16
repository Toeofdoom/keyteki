const Card = require('../../Card.js');

class AgentSepdia extends Card {
    //Fight/Reap: Deal 1D to a creature. If the tide is high, stun it.
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 1 })
            },
            then: (preThenContext) => ({
                alwaysTriggers: true,
                condition: (context) => context.player.isTideHigh(),
                gameAction: ability.actions.stun({ target: preThenContext.target })
            })
        });
    }
}

AgentSepdia.id = 'agent-sepdia';

module.exports = AgentSepdia;
