const Card = require('../../Card.js');

class ZForceAgent14 extends Card {
    //Fight: Gain 1A for each upgrade on $this.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.gainAmber((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay
                        .flatMap((card) => card.upgrades || [])
                        .filter((card) => context.source.upgrades.includes(card)).length
            }))
        });
    }
}

ZForceAgent14.id = 'z-force-agent-14';

module.exports = ZForceAgent14;
