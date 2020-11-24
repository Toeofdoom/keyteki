const Card = require('../../Card.js');

class CANDLEUnit extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.draw({ amount: 1 })
        });
        this.action({
            gameAction: ability.actions.capture({ amount: 1 })
        });
    }
}

CANDLEUnit.id = 'cændle-unit';

module.exports = CANDLEUnit;
