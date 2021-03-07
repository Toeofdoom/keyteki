const Card = require('../../Card.js');

class DoomSigil extends Card {
    //Each creature gains poison.
    //If there are no creatures in play, destroy $this.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.addKeyword({
                poison: 1
            })
        });
        this.persistentEffect({
            targetController: 'any',
            effect: ability.effects.terminalCondition({
                condition: (context) => context.game.creaturesInPlay.length === 0,
                gameAction: ability.actions.destroy((context) => ({
                    target: context.source
                }))
            })
        });
    }
}

DoomSigil.id = 'doom-sigil';

module.exports = DoomSigil;
