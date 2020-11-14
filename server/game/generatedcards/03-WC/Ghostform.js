const Card = require('../../Card.js');

class Ghostform extends Card {
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
