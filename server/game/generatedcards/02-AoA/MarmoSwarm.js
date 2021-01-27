const Card = require('../../Card.js');

class MarmoSwarm extends Card {
    //$this gets +1 power for each A in your pool.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyPower((card, context) => 1 * context.player.amber)
        });
    }
}

MarmoSwarm.id = 'marmo-swarm';

module.exports = MarmoSwarm;
