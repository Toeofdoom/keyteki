const Card = require('../../Card.js');

class BiomatrixBackup extends Card {
    //This creature gains, “Destroyed: Put this creature into its owner's archives.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.archive((context) => ({
                    target: context.source
                }))
            })
        });
    }
}

BiomatrixBackup.id = 'biomatrix-backup';

module.exports = BiomatrixBackup;
