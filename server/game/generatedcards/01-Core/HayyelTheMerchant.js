const Card = require('../../Card.js');

class HayyelTheMerchant extends Card {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player && event.card.type === 'artifact'
            },
            gameAction: ability.actions.gainAmber({ amount: 1 })
        });
    }
}

HayyelTheMerchant.id = 'hayyel-the-merchant';

module.exports = HayyelTheMerchant;
