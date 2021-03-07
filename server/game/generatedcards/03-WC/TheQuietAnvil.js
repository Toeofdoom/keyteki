const Card = require('../../Card.js');

class TheQuietAnvil extends Card {
    //Keys cost –2A.
    //After a player forges a key, destroy $this.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyKeyCost(() => -2)
        });
        this.reaction({
            when: {
                onForgeKey: () => true
            },
            gameAction: ability.actions.destroy((context) => ({
                target: context.source
            }))
        });
    }
}

TheQuietAnvil.id = 'the-quiet-anvil';

module.exports = TheQuietAnvil;
