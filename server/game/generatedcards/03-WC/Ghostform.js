const Card = require('../../Card.js');

class Ghostform extends Card {
    //This creature gains invulnerable. (It cannot be destroyed or dealt damage.)
    //This creature gains, “Fight/Reap: Archive $this.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.addKeyword({
                invulnerable: 1
            })
        });
        this.whileAttached({
            effect: ability.effects.gainAbility('fight', {
                reap: true,
                gameAction: ability.actions.archive((context) => ({
                    target: context.source
                }))
            })
        });
    }
}

Ghostform.id = 'ghostform';

module.exports = Ghostform;
