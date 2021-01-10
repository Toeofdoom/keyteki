const Card = require('../../Card.js');

class TransporterPlatform extends Card {
    //Action: Return a friendly creature and each upgrade attached to it to their owners’ hands.
    //
    setupCardAbilities(ability) {
        this.action({
            target: {
                mode: '',
                gameAction: ability.actions.returnToHand()
            }
        });
    }
}

TransporterPlatform.id = 'transporter-platform';

module.exports = TransporterPlatform;
