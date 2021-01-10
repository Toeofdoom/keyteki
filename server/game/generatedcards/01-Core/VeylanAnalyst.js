const Card = require('../../Card.js');

class VeylanAnalyst extends Card {
    //Each time you use an artifact, gain 1<A>.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onAbilityResolved: (event, context) =>
                    event.context.ability.isAction() &&
                    !event.context.ability.isCardPlayed() &&
                    event.context.player === context.player &&
                    event.context.source.type === 'artifact'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

VeylanAnalyst.id = 'veylan-analyst';

module.exports = VeylanAnalyst;
