const Card = require('../../Card.js');

class ZysysyxShockworm extends Card {
    //After an enemy creature reaps, stun it.
    //
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onReap: (event, context) =>
                    event.card.controller !== context.player && event.card.type === 'creature'
            },
            gameAction: ability.actions.stun((context) => ({
                target: context.target
            }))
        });
    }
}

ZysysyxShockworm.id = 'zysysyx-shockworm';

module.exports = ZysysyxShockworm;
