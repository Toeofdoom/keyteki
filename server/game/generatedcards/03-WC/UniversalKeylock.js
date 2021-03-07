const Card = require('../../Card.js');

class UniversalKeylock extends Card {
    //Keys cost +3A.
    //After a player forges a key, destroy $this.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.modifyKeyCost(() => 3)
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

UniversalKeylock.id = 'universal-keylock';

module.exports = UniversalKeylock;
