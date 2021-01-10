const Card = require('../../Card.js');

class BackupCopy extends Card {
    //This creature gains, “Destroyed: Put this creature on top of your deck.”
    //
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.returnToDeck((context) => ({
                    target: context.source
                }))
            })
        });
    }
}

BackupCopy.id = 'backup-copy';

module.exports = BackupCopy;
